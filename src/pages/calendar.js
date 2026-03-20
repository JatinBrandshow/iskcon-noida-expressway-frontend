import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { API_NODE_URL } from '../configs/config';
import styles from '../styles/calendar.module.css';

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarData, setCalendarData] = useState({ tithi: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [filterType, setFilterType] = useState('All');

  const fetchCalendarData = async (date) => {
    setIsLoading(true);
    setError(null);
    try {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = 1;

      const response = await fetch(`${API_NODE_URL}guest/calendar`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'guest-access-key'
        },
        body: JSON.stringify({
          date: date.toISOString(),
          day,
          month,
          year,
          hour: 12,
          min: 0,
          latitude: 28.5355,
          longitude: 77.3910,
          timezone: 5.5,
          language: 'en'
        })
      });

      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        console.error("Non-JSON response received:", text.substring(0, 100));
        throw new Error("Invalid response format from server (non-JSON)");
      }

      const result = await response.json();
      if (result.status) {
        setCalendarData(result.data);
      }
    } catch (error) {
      console.error('Error fetching calendar data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCalendarData(currentDate);
  }, [currentDate]);

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  const renderCells = () => {
    const totalDays = daysInMonth(currentDate.getFullYear(), currentDate.getMonth());
    const startOffset = firstDayOfMonth(currentDate.getFullYear(), currentDate.getMonth());
    const cells = [];

    // Empty cells for offset
    for (let i = 0; i < startOffset; i++) {
      cells.push(<div key={`empty-${i}`} className={styles.emptyCell}></div>);
    }

    // Actual day cells
    for (let d = 1; d <= totalDays; d++) {
      const dateStr = `${year}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const tithiEntry = calendarData.tithi.find(t => t.date === dateStr);
      const festivals = calendarData.festival?.filter(f => f.date === dateStr) || [];
      const muhurats = calendarData.muhurat?.filter(m => m.date === dateStr) || [];

      const tithiName = tithiEntry?.value?.tithi?.details?.tithi_name || "";
      const isToday = new Date().toDateString() === new Date(year, currentDate.getMonth(), d).toDateString();

      let isFilteredOut = false;
      if (filterType === 'Festival' && festivals.length === 0) isFilteredOut = true;
      if (filterType === 'Shubh Muhurat' && muhurats.length === 0) isFilteredOut = true;
      if (filterType === 'Tithi' && !tithiEntry) isFilteredOut = true;

      cells.push(
        <div
          key={d}
          className={`${styles.dayCell} ${isToday ? styles.activeDay : ''} ${festivals.length > 0 ? styles.festivalDay : ''} ${isFilteredOut ? styles.dimmedDay : ''}`}
          onClick={() => setSelectedDay({ ...tithiEntry, festivals, muhurats, date: dateStr })}
        >
          <span className={styles.dayNumber}>{d}</span>
          <div className={styles.tithiInfo}>{tithiName}</div>
          {festivals.length > 0 && (
            <div className={styles.festivalIndicator} title={festivals.map(f => f.value).join(', ')}>
              • {festivals[0].value}
              {festivals[0].timings?.length > 0 && festivals[0].timings[0] !== "" && (
                <span className="text-[10px] block font-novaReg opacity-80 mt-1 italic">
                  [{festivals[0].timings[0]}]
                </span>
              )}
            </div>
          )}
          {muhurats.length > 0 && (
            <div className={styles.transitIndicator}>
              {muhurats[0].value}
              {muhurats[0].timings?.length > 0 && muhurats[0].timings[0] !== "" && (
                <span className="text-[10px] block opacity-80 mt-1">
                  ({muhurats[0].timings[0]})
                </span>
              )}
            </div>
          )}
        </div>
      );
    }

    return cells;
  };

  return (
    <div className={styles.calendarContainer}>
      <Head>
        <title>Hindu Calendar | ISKCON Noida Expressway</title>
        <meta name="description" content="View Hindu Calendar, Panchang, and Tithis for the month." />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <div className={styles.header}>
        <div className={styles.titleSection}>
          <h1>Hindu Calendar</h1>
          <p>Devotional timing and sacred dates</p>
        </div>
        <div className={styles.controls}>
          <div className={styles.monthNav}>
            <button className={styles.navBtn} onClick={handlePrevMonth}>&lt;</button>
            <span className={styles.currentMonth}>{monthName} {year}</span>
            <button className={styles.navBtn} onClick={handleNextMonth}>&gt;</button>
          </div>
        </div>
      </div>

      <div className={styles.filterTabs}>
        {['All', 'Festival', 'Tithi', 'Shubh Muhurat'].map(tab => (
          <button
            key={tab}
            className={`${styles.tab} ${filterType === tab ? styles.activeTab : ''}`}
            onClick={() => setFilterType(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div className={styles.loading}>Loading sacred data...</div>
      ) : (
        <div className={styles.calendarGrid}>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className={styles.dayHeader}>{day}</div>
          ))}
          {renderCells()}
        </div>
      )}

      {selectedDay && (
        <div className={styles.overlay} onClick={() => setSelectedDay(null)}>
          <div className={`${styles.modal} ${styles.panchangModal}`} onClick={e => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setSelectedDay(null)}>×</button>

            <div className={styles.panchangHeader}>
              <h2 className={styles.modalTitle}>Daily Panchang</h2>
              <div className={styles.panchangDate}>
                {new Date(selectedDay.date).toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
              </div>
            </div>

            <div className={styles.panchangScrollArea}>
              {/* Main Panchang Elements */}
              <div className={styles.sectionTitle}>Panchang Elements</div>
              <div className={styles.detailGrid}>
                <div className={styles.detailItem}>
                  <div className={styles.label}>Tithi</div>
                  <div className={styles.value}>{selectedDay.value?.tithi?.details?.tithi_name || "N/A"}</div>
                  {selectedDay.value?.tithi?.end_time && (
                    <div className={styles.subValue}>Ends at {selectedDay.value.tithi.end_time.hour}:{selectedDay.value.tithi.end_time.minute.toString().padStart(2, '0')}</div>
                  )}
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.label}>Nakshatra</div>
                  <div className={styles.value}>{selectedDay.value?.nakshatra?.details?.nak_name || "N/A"}</div>
                  {selectedDay.value?.nakshatra?.end_time && (
                    <div className={styles.subValue}>Ends at {selectedDay.value.nakshatra.end_time.hour}:{selectedDay.value.nakshatra.end_time.minute.toString().padStart(2, '0')}</div>
                  )}
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.label}>Yoga</div>
                  <div className={styles.value}>{selectedDay.value?.yog?.details?.yog_name || "N/A"}</div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.label}>Karana</div>
                  <div className={styles.value}>{selectedDay.value?.karan?.details?.karan_name || "N/A"}</div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.label}>Paksha</div>
                  <div className={styles.value}>{selectedDay.value?.paksha || "N/A"}</div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.label}>Ritu</div>
                  <div className={styles.value}>{selectedDay.value?.ritu || "N/A"}</div>
                </div>
              </div>

              {/* Sun & Moon details */}
              <div className={styles.sectionTitle}>Sun & Moon Details</div>
              <div className={styles.detailGrid}>
                <div className={styles.detailItem}>
                  <div className={styles.label}>Sunrise</div>
                  <div className={styles.value}>☀️ {selectedDay.value?.sunrise || "N/A"}</div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.label}>Sunset</div>
                  <div className={styles.value}>🌅 {selectedDay.value?.sunset || "N/A"}</div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.label}>Moonrise</div>
                  <div className={styles.value}>🌙 {selectedDay.value?.moonrise || "N/A"}</div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.label}>Moonset</div>
                  <div className={styles.value}>🌇 {selectedDay.value?.moonset || "N/A"}</div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.label}>Sun Sign</div>
                  <div className={styles.value}>{selectedDay.value?.sun_sign || "N/A"}</div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.label}>Moon Sign</div>
                  <div className={styles.value}>{selectedDay.value?.moon_sign || "N/A"}</div>
                </div>
              </div>

              {/* Auspicious & Inauspicious timings */}
              <div className={styles.sectionTitle}>Timings & Muhurtas</div>
              <div className={styles.detailGrid}>
                <div className={`${styles.detailItem} ${styles.auspicious}`}>
                  <div className={styles.label}>Abhijit Muhurta</div>
                  <div className={styles.value}>
                    {selectedDay.value?.abhijit_muhurta?.start} - {selectedDay.value?.abhijit_muhurta?.end}
                  </div>
                </div>
                <div className={`${styles.detailItem} ${styles.inauspicious}`}>
                  <div className={styles.label}>Rahukaal</div>
                  <div className={styles.value}>
                    {selectedDay.value?.rahukaal?.start} - {selectedDay.value?.rahukaal?.end}
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.label}>Guli Kaal</div>
                  <div className={styles.value}>
                    {selectedDay.value?.guliKaal?.start} - {selectedDay.value?.guliKaal?.end}
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.label}>Yamghant Kaal</div>
                  <div className={styles.value}>
                    {selectedDay.value?.yamghant_kaal?.start} - {selectedDay.value?.yamghant_kaal?.end}
                  </div>
                </div>
              </div>

              {/* Calendar Details */}
              <div className={styles.sectionTitle}>In-depth Details</div>
              <div className={styles.detailGrid}>
                <div className={styles.detailItem}>
                  <div className={styles.label}>Vikram Samvat</div>
                  <div className={styles.value}>{selectedDay.value?.vikram_samvat} ({selectedDay.value?.vkram_samvat_name})</div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.label}>Shaka Samvat</div>
                  <div className={styles.value}>{selectedDay.value?.shaka_samvat} ({selectedDay.value?.shaka_samvat_name})</div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.label}>Ayana</div>
                  <div className={styles.value}>{selectedDay.value?.ayana || "N/A"}</div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.label}>Disha Shool</div>
                  <div className={styles.value}>{selectedDay.value?.disha_shool || "N/A"}</div>
                </div>
              </div>

              {selectedDay.festivals && selectedDay.festivals.length > 0 && (
                <div className={`${styles.detailItem} ${styles.fullWidth} ${styles.festivalSection}`}>
                  <div className={styles.label}>Festivals / Events</div>
                  <div className={styles.value}>
                    {selectedDay.festivals.map((f, i) => (
                      <div key={i} className={styles.festivalItem}>
                        <div className={styles.festivalHeading}>✨ {f.value}</div>
                        {f.details && <div className={styles.festivalDesc}>{f.details}</div>}
                        {f.timings && f.timings.length > 0 && f.timings[0] !== "" && (
                          <div className={styles.timingsList}>
                            {f.timings.filter(t => t.trim() !== "").map((t, ti) => (
                              <span key={ti} className={styles.timingBadge}>{t}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedDay.muhurats && selectedDay.muhurats.length > 0 && (
                <div className={`${styles.detailItem} ${styles.fullWidth} ${styles.muhuratSection}`}>
                  <div className={styles.label}>Additional Muhurats</div>
                  <div className={styles.value}>
                    {selectedDay.muhurats.map((m, i) => (
                      <div key={i} className={styles.transitItem}>
                        <div className={styles.festivalHeading}>🕒 {m.value}</div>
                        {m.details && <div className={styles.festivalDesc}>{m.details}</div>}
                        {m.timings && m.timings.length > 0 && m.timings[0] !== "" && (
                          <div className={styles.timingsList}>
                            {m.timings.filter(t => t.trim() !== "").map((t, ti) => (
                              <span key={ti} className={styles.timingBadge}>{t}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarPage;
