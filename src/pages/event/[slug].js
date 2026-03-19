import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { API_NODE_URL } from "@/configs/config"
import EventDetailPage from "@/components/EventDetailPage"

export default function EventPage() {
    const router = useRouter()
    const { slug } = router.query
    const [eventData, setEventData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!slug) return

        const fetchEventDetail = async () => {
            setLoading(true)
            try {
                // 1. Fetch all events to find the one matching the slug/path
                const listResp = await fetch(`${API_NODE_URL}slug/getbytype?type=Event`)
                const listData = await listResp.json()
                
                let targetEvent = null
                if (listData.status && listData.data) {
                    targetEvent = listData.data.find(e => {
                        // Match by path suffix (e.g. /event/janmashtami-2026 matches janmashtami-2026)
                        const pathParts = e.path?.split('/') || []
                        const lastPart = pathParts[pathParts.length - 1]
                        return lastPart === slug || e.page_id.toString() === slug || e._id === slug
                    })
                }

                if (targetEvent) {
                    const page_id = targetEvent.page_id

                    // 2. Fetch full details for this specific page
                    const detailResp = await fetch(`${API_NODE_URL}slug/getbyid?page_id=${page_id}`)
                    const detailData = await detailResp.json()

                    if (detailData.status && detailData.data) {
                        const fullData = { ...detailData.data }

                        // 3. Fetch extra components (holders)
                        const holdersResp = await fetch(`${API_NODE_URL}extra-component-data/used-holders/${page_id}`)
                        const holdersData = await holdersResp.json()

                        if (holdersData.status && holdersData.data) {
                            const extraData = {}
                            holdersData.data.forEach(item => {
                                // used-holders returns items with "holder" field like "Holder 1"
                                // We need "holder1" etc. for the component
                                if (item.holder) {
                                    const key = item.holder.toLowerCase().replace(/\s+/g, '')
                                    extraData[key] = item
                                }
                            })
                            fullData.extraComponentData = extraData
                        }

                        setEventData(fullData)
                    }
                }
            } catch (error) {
                console.error("Error fetching event details:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchEventDetail()
    }, [slug])

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mb-4"></div>
                <p className="text-gray-600 font-novaReg">Loading event details...</p>
            </div>
        )
    }

    return (
        <EventDetailPage data={eventData} />
    )
}
