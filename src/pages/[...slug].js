import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { API_NODE_URL } from "@/configs/config"
import EventDetailPage from "@/components/EventDetailPage"
import NewsDetail from "@/components/NewsDetail"

export default function CatchAllDynamicPage() {
    const router = useRouter()
    const { slug } = router.query
    const [pageData, setPageData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!slug) return

        const fetchPageDetail = async () => {
            setLoading(true)
            try {
                const pathSlug = Array.isArray(slug) ? slug.join('/') : slug
                const fullPath = `/${pathSlug}`

                // 1. Try to find the page in different types (Event, News, etc.)
                const types = ["Event", "News"]
                let targetPage = null

                for (const type of types) {
                    const listResp = await fetch(`${API_NODE_URL}slug/getbytype?type=${type}`)
                    const listData = await listResp.json()
                    
                    if (listData.status && listData.data) {
                        targetPage = listData.data.find(item => {
                            const normalizedApiPath = item.path?.replace(/\/$/, '') || ''
                            const normalizedCurrentPath = fullPath.replace(/\/$/, '')
                            return normalizedApiPath === normalizedCurrentPath || 
                                   item.page_id?.toString() === pathSlug || 
                                   item._id === pathSlug
                        })
                    }
                    if (targetPage) break
                }

                if (targetPage) {
                    const page_id = targetPage.page_id

                    // 2. Fetch full details
                    const detailResp = await fetch(`${API_NODE_URL}slug/getbyid?page_id=${page_id}`)
                    const detailData = await detailResp.json()

                    if (detailData.status && detailData.data) {
                        const fullData = { ...detailData.data }

                        // 3. Fetch extra components
                        const holdersResp = await fetch(`${API_NODE_URL}extra-component-data/used-holders/${page_id}`)
                        const holdersData = await holdersResp.json()

                        if (holdersData.status && holdersData.data) {
                            const extraData = {}
                            holdersData.data.forEach(item => {
                                if (item.holder) {
                                    const key = item.holder.toLowerCase().replace(/\s+/g, '')
                                    extraData[key] = item
                                }
                            })
                            fullData.extraComponentData = extraData
                        }

                        setPageData(fullData)
                    }
                } else {
                    setError("Page not found")
                }
            } catch (err) {
                console.error("Error fetching dynamic page details:", err)
                setError("An error occurred")
            } finally {
                setLoading(false)
            }
        }

        fetchPageDetail()
    }, [slug])

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mb-4"></div>
                <p className="text-gray-600 font-novaReg">Loading page details...</p>
            </div>
        )
    }

    if (error || !pageData) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 max-w-md mx-4">
                    <div className="text-red-500 mb-4 text-6xl font-novaBold">404</div>
                    <h1 className="text-2xl font-novaBold text-gray-900 mb-2 font-novaBold">Page Not Found</h1>
                    <p className="text-gray-600 mb-6 font-novaReg">The page you are looking for doesn't exist or has been moved.</p>
                    <a href="/" className="inline-block px-10 py-4 bg-primary text-white rounded-2xl font-novaBold hover:shadow-2xl hover:shadow-primary/30 transition-all active:scale-95">
                        घर वापसी • Go Back Home
                    </a>
                </div>
            </div>
        )
    }

    return (
        <>
            {pageData.type === "Event" ? (
                <EventDetailPage data={pageData} />
            ) : (
                <NewsDetail data={pageData} />
            )}
        </>
    )
}
