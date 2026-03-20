import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { API_NODE_URL } from '../configs/config';
import styles from '../styles/calendar.module.css';

const TithiCalendarPage = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [calendarData, setCalendarData] = useState({ tithi: [] });
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
            console.error('Error fetching tithi data:', error);
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
            const isToday = new Date().toDateString() === new Date(year, currentDate.getMonth(), d).toDateString();
            const tithiName = tithiEntry?.value?.tithi?.details?.tithi_name || "-";
            const packsha = tithiEntry?.value?.paksha || "";

            cells.push(
                <div
                    key={d}
                    className={`${styles.dayCell} ${styles.tithiFocus} ${isToday ? styles.activeDay : ''}`}
                    onClick={() => setSelectedDay({ ...tithiEntry, date: dateStr })}
                >
                    <span className={styles.dayNumber}>{d}</span>
                    <div className={`${styles.tithiLabel} ${packsha.includes('Shukla') ? styles.shukla : styles.krishna}`}>
                        {tithiName.split(' ')[1] || tithiName}
                    </div>
                    <div className={styles.pakshaMini}>{packsha.split('-')[0]}</div>
                </div>
            );
        }
        return cells;
    };

    return (
        <div className={styles.calendarContainer}>
            <Head>
                <title>Tithi Calendar | ISKCON Noida Expressway</title>
                <meta name="description" content="View Hindu Tithis and Lunar calendar." />
            </Head>

            <div className={styles.header}>
                <div className={styles.titleSection}>
                    <h1>Tithi Calendar</h1>
                    <p>Lunar dates according to the Vedic calendar</p>
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
                <div className={styles.legendItem}><span className={styles.shuklaDot}></span> Shukla Paksha</div>
                <div className={styles.legendItem}><span className={styles.krishnaDot}></span> Krishna Paksha</div>
            </div>

            {isLoading ? (
                <div className={styles.loading}>Loading sacred timing...</div>
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
                            <div className={styles.sectionTitle}>Panchang Elements</div>
                            <div className={styles.detailGrid}>
                                <div className={styles.detailItem}>
                                    <div className={styles.label}>Tithi</div>
                                    <div className={styles.value}>{selectedDay.value?.tithi?.details?.tithi_name || "N/A"}</div>
                                </div>
                                <div className={styles.detailItem}>
                                    <div className={styles.label}>Paksha</div>
                                    <div className={styles.value}>{selectedDay.value?.paksha || "N/A"}</div>
                                </div>
                                <div className={styles.detailItem}>
                                    <div className={styles.label}>Nakshatra</div>
                                    <div className={styles.value}>{selectedDay.value?.nakshatra?.details?.nak_name || "N/A"}</div>
                                </div>
                                <div className={styles.detailItem}>
                                    <div className={styles.label}>Yoga</div>
                                    <div className={styles.value}>{selectedDay.value?.yog?.details?.yog_name || "N/A"}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TithiCalendarPage;
