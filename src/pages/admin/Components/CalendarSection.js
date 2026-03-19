"use client"

import { useState, useEffect } from "react"
import { Plus, Edit, Trash2, Search, Calendar, Save, X, Info } from "lucide-react"
import { API_NODE_URL } from "@/configs/config"

export default function CalendarSection() {
  const [entries, setEntries] = useState([])
  const [filteredEntries, setFilteredEntries] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingEntry, setEditingEntry] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("")

  // Form state
  const [formData, setFormData] = useState({
    date: "",
    heading: "",
    line: "",
    type: "Festival",
    rashi: "General",
    timings: [""],
    status: true
  })

  const types = ["Festival", "Tithi", "Shubh Muhurat", "Special"]
  const rashis = ["General", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libre", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"]

  useEffect(() => {
    fetchEntries()
  }, [])

  useEffect(() => {
    filterEntries()
  }, [entries, searchTerm, filterType])

  const fetchEntries = async () => {
    try {
      setLoading(true)
      const token = typeof window !== "undefined" ? localStorage.getItem("admin_token")?.replaceAll(`"`, "") : "";
      const response = await fetch(`${API_NODE_URL}guest/calendar/getAll`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
          "x-api-key": "guest-access-key"
        }
      })
      const data = await response.json()
      if (data.status) {
        setEntries(data.data)
      }
    } catch (error) {
      console.error("Error fetching calendar entries:", error)
    } finally {
      setLoading(false)
    }
  }

  const filterEntries = () => {
    let filtered = entries

    if (searchTerm) {
      filtered = filtered.filter(
        (entry) =>
          (entry.heading?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
          (entry.line?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
          (entry.date?.includes(searchTerm))
      )
    }

    if (filterType) {
      filtered = filtered.filter((entry) => entry.type === filterType)
    }

    setFilteredEntries(filtered)
  }

  const resetForm = () => {
    setFormData({
      date: "",
      heading: "",
      line: "",
      type: "Festival",
      rashi: "General",
      timings: [""],
      status: true
    })
    setEditingEntry(null)
    setShowForm(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const token = typeof window !== "undefined" ? localStorage.getItem("admin_token")?.replaceAll(`"`, "") : "";
    try {
      const url = editingEntry
        ? `${API_NODE_URL}guest/calendar/update`
        : `${API_NODE_URL}guest/calendar/add`

      const payload = editingEntry 
        ? { ...formData, id: editingEntry._id }
        : formData

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
          "x-api-key": "guest-access-key"
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (data.status) {
        await fetchEntries()
        resetForm()
        alert(editingEntry ? "Entry updated successfully!" : "Entry created successfully!")
      } else {
        alert(data.message || "Error saving entry")
      }
    } catch (error) {
      console.error("Error saving calendar entry:", error)
      alert("Error saving calendar entry")
    }
  }

  const handleEdit = (entry) => {
    setFormData({
      date: entry.date,
      heading: entry.heading,
      line: entry.line,
      type: entry.type,
      rashi: entry.rashi || "General",
      timings: entry.timings && entry.timings.length > 0 ? entry.timings : [""],
      status: entry.status
    })
    setEditingEntry(entry)
    setShowForm(true)
  }

  const handleDelete = async (entryId) => {
    if (!confirm("Are you sure you want to delete this entry?")) return

    const token = typeof window !== "undefined" ? localStorage.getItem("admin_token")?.replaceAll(`"`, "") : "";
    try {
      const response = await fetch(`${API_NODE_URL}guest/calendar/delete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
          "x-api-key": "guest-access-key"
        },
        body: JSON.stringify({ _id: entryId })
      })

      const data = await response.json()

      if (data.status) {
        await fetchEntries()
        alert("Entry deleted successfully!")
      } else {
        alert(data.message || "Error deleting entry")
      }
    } catch (error) {
      console.error("Error deleting calendar entry:", error)
      alert("Error deleting calendar entry")
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case "Festival":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "Transit":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Special":
        return "bg-orange-100 text-orange-800 border-orange-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 font-novaBold">Calendar Management</h1>
          <p className="text-gray-600 mt-1 font-novaReg">Manage manual panchang and festival entries</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-novaSemi"
        >
          <Plus className="w-4 h-4" />
          Add Manual Entry
        </button>
      </div>

      {/* Tabs / Filters */}
      <div className="bg-white p-4 rounded-lg border shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setFilterType("")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${filterType === "" ? "bg-white text-orange-600 shadow-sm" : "text-gray-500 hover:text-gray-700 hover:bg-gray-200"}`}
            >
              All Entries
            </button>
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${filterType === type ? "bg-white text-orange-600 shadow-sm" : "text-gray-500 hover:text-gray-700 hover:bg-gray-200"}`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="w-full sm:w-80">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent font-novaReg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6 border-b pb-4">
                <h2 className="text-2xl font-bold text-gray-900 font-novaBold">
                  {editingEntry ? "Edit Calendar Entry" : "Create New Entry"}
                </h2>
                <button onClick={resetForm} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-novaSemi">Date *</label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 font-novaReg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-novaSemi">Type *</label>
                    <select
                      required
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 font-novaReg"
                    >
                      {types.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-novaSemi">Heading *</label>
                  <input
                    type="text"
                    required
                    value={formData.heading}
                    onChange={(e) => setFormData({ ...formData, heading: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 font-novaReg"
                    placeholder="e.g. Ekadashi, Holi, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-novaSemi">Content / Details *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.line}
                    onChange={(e) => setFormData({ ...formData, line: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 font-novaReg"
                    placeholder="Enter short description or details..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-novaSemi">Zodiac / Rashi (Optional)</label>
                    <select
                      value={formData.rashi}
                      onChange={(e) => setFormData({ ...formData, rashi: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 font-novaReg"
                    >
                      {rashis.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-end">
                     <label className="flex items-center gap-2 cursor-pointer pb-2">
                        <input 
                          type="checkbox"
                          checked={formData.status}
                          onChange={(e) => setFormData({ ...formData, status: e.target.checked })}
                          className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                        />
                        <span className="text-sm font-medium text-gray-700 font-novaReg">Active / Published</span>
                     </label>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="block text-sm font-medium text-gray-700 font-novaSemi">Timings (Optional)</label>
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, timings: [...formData.timings, ""]})}
                      className="text-xs font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1"
                    >
                      <Plus className="w-3 h-3" /> Add Time
                    </button>
                  </div>
                  {formData.timings.map((time, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={time}
                        onChange={(e) => {
                          const newTimings = [...formData.timings];
                          newTimings[index] = e.target.value;
                          setFormData({...formData, timings: newTimings});
                        }}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 font-novaReg"
                        placeholder="e.g. 10:00 AM - 12:00 PM"
                      />
                      {formData.timings.length > 1 && (
                        <button
                          type="button"
                          onClick={() => {
                            const newTimings = formData.timings.filter((_, i) => i !== index);
                            setFormData({...formData, timings: newTimings});
                          }}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors border border-red-200"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex justify-end gap-4 pt-6 border-t font-novaSemi">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors shadow-sm"
                  >
                    <Save className="w-4 h-4" />
                    {editingEntry ? "Update Entry" : "Save Entry"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* List */}
      <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b font-novaSemi">
              <tr>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Heading</th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Type</th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Rashi</th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 font-novaReg">
              {loading ? (
                <tr>
                  <td colSpan="6" className="px-6 py-12 text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600 mx-auto"></div>
                    <p className="text-gray-500 mt-2">Loading entries...</p>
                  </td>
                </tr>
              ) : filteredEntries.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-6 py-12 text-center text-gray-500">
                    <Info className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                    No entries found
                  </td>
                </tr>
              ) : (
                filteredEntries.map((entry) => (
                  <tr key={entry._id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-l-4 border-l-transparent hover:border-l-orange-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        {entry.date}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{entry.heading}</div>
                      <div className="text-xs text-gray-500 line-clamp-1">{entry.line}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getTypeColor(entry.type)}`}>
                        {entry.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {entry.rashi || "General"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${entry.status ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {entry.status ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                      <div className="flex justify-end gap-3">
                        <button
                          onClick={() => handleEdit(entry)}
                          className="text-orange-600 hover:text-orange-900 transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(entry._id)}
                          className="text-red-600 hover:text-red-900 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
