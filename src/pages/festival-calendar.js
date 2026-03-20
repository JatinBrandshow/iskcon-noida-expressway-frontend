import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { API_NODE_URL } from '../configs/config';
import styles from '../styles/calendar.module.css';

const FestivalCalendarPage = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [calendarData, setCalendarData] = useState({ tithi: [], festival: [], muhurat: [] });
    const [isLoading, setIsLoading] = useState(false);
    const [selectedDay, setSelectedDay] = useState(null);

    const fetchCalendarData = async (date) => {
        setIsLoading(true);
        try {
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            const response = await fetch(`${API_NODE_URL}guest/calendar`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'guest-access-key'
                },
                body: JSON.stringify({
                    date: date.toISOString(),
                    day: 1,
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

            const result = await response.json();
            if (result.status) {
                setCalendarData(result.data);
            }
        } catch (error) {
            console.error('Error fetching festival data:', error);
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

        for (let i = 0; i < startOffset; i++) {
            cells.push(<div key={`empty-${i}`} className={styles.emptyCell}></div>);
        }

        for (let d = 1; d <= totalDays; d++) {
            const dateStr = `${year}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
            const tithiEntry = calendarData.tithi.find(t => t.date === dateStr);
            const manualFestivals = calendarData.festival?.filter(f => f.date === dateStr) || [];
            const apiFestivalsRaw = tithiEntry?.value?.api_festivals?.[0] || "";
            const apiFestivals = apiFestivalsRaw ? apiFestivalsRaw.split(',').map(name => ({ value: name.trim(), isApi: true })) : [];
            const isToday = new Date().toDateString() === new Date(year, currentDate.getMonth(), d).toDateString();

            // Combine manual and API festivals
            const allFestivals = [...manualFestivals.map(f => ({ ...f, isApi: false })), ...apiFestivals];
            const hasFestival = allFestivals.length > 0;

            cells.push(
                <div
                    key={d}
                    className={`${styles.dayCell} ${isToday ? styles.activeDay : ''} ${hasFestival ? styles.festivalHighlight : styles.dimmedFestivalDay}`}
                    onClick={() => setSelectedDay({ ...tithiEntry, festivals: allFestivals, muhurats: calendarData.muhurat?.filter(m => m.date === dateStr) || [], date: dateStr })}
                >
                    <span className={styles.dayNumber}>{d}</span>
                    {hasFestival && (
                        <div className={styles.festivalIndicatorList}>
                            {allFestivals.slice(0, 2).map((f, i) => (
                                <div key={i} className={styles.festName}>{f.isApi ? '🕉️' : '✨'} {f.value}</div>
                            ))}
                            {allFestivals.length > 2 && <div className={styles.moreFest}>+{allFestivals.length - 2} more</div>}
                        </div>
                    )}
                </div>
            );
        }
        return cells;
    };

    const allMonthlyFestivals = [];

    // Add manual festivals
    if (calendarData.festival) {
        allMonthlyFestivals.push(...calendarData.festival.map(f => ({ ...f, isApi: false })));
    }

    // Add API festivals from tithi data
    if (calendarData.tithi) {
        calendarData.tithi.forEach(tithi => {
            const apiFestivalsRaw = tithi.value?.api_festivals?.[0] || "";
            if (apiFestivalsRaw) {
                apiFestivalsRaw.split(',').forEach(name => {
                    allMonthlyFestivals.push({
                        date: tithi.date,
                        value: name.trim(),
                        isApi: true
                    });
                });
            }
        });
    }

    // Sort them by date
    allMonthlyFestivals.sort((a, b) => a.date.localeCompare(b.date));

    return (
        <div className={styles.calendarContainer}>
            <Head>
                <title>Festival Calendar | ISKCON Noida Expressway</title>
                <meta name="description" content="View Hindu Festivals and sacred events." />
            </Head>

            <div className={styles.header}>
                <div className={styles.titleSection}>
                    <h1>Festival Calendar</h1>
                    <p>Sacred celebrations and devotional events</p>
                </div>
                <div className={styles.controls}>
                    <div className={styles.monthNav}>
                        <button className={styles.navBtn} onClick={handlePrevMonth}>&lt;</button>
                        <span className={styles.currentMonth}>{monthName} {year}</span>
                        <button className={styles.navBtn} onClick={handleNextMonth}>&gt;</button>
                    </div>
                </div>
            </div>

            <div className={styles.legend}>
                <div className={styles.legendItem}><span className={styles.festDot}></span> Festival Day</div>
            </div>

            {isLoading ? (
                <div className={styles.loading}>Loading sacred events...</div>
            ) : (
                <>
                    <div className={styles.calendarGrid}>
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                            <div key={day} className={styles.dayHeader}>{day}</div>
                        ))}
                        {renderCells()}
                    </div>
                </>
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

                            <div className={styles.sectionTitle}>Panchang Elements</div>
                            <div className={styles.detailGrid}>
                                <div className={styles.detailItem}>
                                    <div className={styles.label}>Tithi</div>
                                    <div className={styles.value}>{selectedDay.value?.tithi?.details?.tithi_name || "N/A"}</div>
                                </div>
                                <div className={styles.detailItem}>
                                    <div className={styles.label}>Nakshatra</div>
                                    <div className={styles.value}>{selectedDay.value?.nakshatra?.details?.nak_name || "N/A"}</div>
                                </div>
                            </div>

                            <div className={styles.sectionTitle}>Sun & Moon Details</div>
                            <div className={styles.detailGrid}>
                                <div className={styles.detailItem}><div className={styles.label}>Sunrise</div><div className={styles.value}>☀️ {selectedDay.value?.sunrise || "N/A"}</div></div>
                                <div className={styles.detailItem}><div className={styles.label}>Sunset</div><div className={styles.value}>🌅 {selectedDay.value?.sunset || "N/A"}</div></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FestivalCalendarPage;
