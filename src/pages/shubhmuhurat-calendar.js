import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { API_NODE_URL } from '../configs/config';
import styles from '../styles/calendar.module.css';

const ShubhMuhuratCalendarPage = () => {
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
            console.error('Error fetching muhurat data:', error);
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

            const abhijit = tithiEntry?.value?.abhijit_muhurta || null;
            const rahukaal = tithiEntry?.value?.rahukaal || null;

            cells.push(
                <div
                    key={d}
                    className={`${styles.dayCell} ${styles.muhuratFocus} ${isToday ? styles.activeDay : ''}`}
                    onClick={() => setSelectedDay({ ...tithiEntry, date: dateStr })}
                >
                    <span className={styles.dayNumber}>{d}</span>
                    {abhijit && (
                        <div className={`${styles.miniMuhurat} ${styles.miniAuspicious}`}>
                            {abhijit.start}
                        </div>
                    )}
                    {rahukaal && (
                        <div className={`${styles.miniMuhurat} ${styles.miniInauspicious}`}>
                            {rahukaal.start}
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
                <title>Shubh Muhurat Calendar | ISKCON Noida Expressway</title>
                <meta name="description" content="View Auspicious timings and Chaughadiya." />
            </Head>

            <div className={styles.header}>
                <div className={styles.titleSection}>
                    <h1>Shubh Muhurat Calendar</h1>
                    <p>Finding the right time for devotional activities</p>
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
                <div className={styles.legendItem}><span className={styles.abhijitDot}></span> Abhijit Timing</div>
                <div className={styles.legendItem}><span className={styles.rahukaalDot}></span> Rahukaal Timing</div>
            </div>

            {isLoading ? (
                <div className={styles.loading}>Loading muhurtas...</div>
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
                            <h2 className={styles.modalTitle}>Daily Muhurat Report</h2>
                            <div className={styles.panchangDate}>{new Date(selectedDay.date).toDateString()}</div>
                        </div>
                        <div className={styles.panchangScrollArea}>
                            {/* Muhurta Sections */}
                            <div className={styles.sectionTitle}>Main Muhurtas</div>
                            <div className={styles.detailGrid}>
                                <div className={`${styles.detailItem} ${styles.auspicious}`}>
                                    <div className={styles.label}>Abhijit Muhurta</div>
                                    <div className={styles.value}>{selectedDay.value?.abhijit_muhurta?.start} - {selectedDay.value?.abhijit_muhurta?.end}</div>
                                </div>
                                <div className={`${styles.detailItem} ${styles.inauspicious}`}>
                                    <div className={styles.label}>Rahukaal</div>
                                    <div className={styles.value}>{selectedDay.value?.rahukaal?.start} - {selectedDay.value?.rahukaal?.end}</div>
                                </div>
                            </div>

                            {selectedDay.value?.chaughadiya && (
                                <>
                                    <div className={styles.sectionTitle}>Chaughadiya Timing</div>
                                    <div className={styles.chaughadiyaGrid}>
                                        <div className={styles.chaughadiyaColumn}>
                                            <h4 className={styles.columnTitle}>☀️ Day Chaughadiya</h4>
                                            {selectedDay.value.chaughadiya.day.map((item, index) => (
                                                <div key={index} className={`${styles.chaughadiyaItem} ${styles[item.muhurta.toLowerCase()]}`}>
                                                    <span className={styles.chaughadiyaName}>{item.muhurta}</span>
                                                    <span className={styles.chaughadiyaTime}>{item.time}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className={styles.chaughadiyaColumn}>
                                            <h4 className={styles.columnTitle}>🌙 Night Chaughadiya</h4>
                                            {selectedDay.value.chaughadiya.night.map((item, index) => (
                                                <div key={index} className={`${styles.chaughadiyaItem} ${styles[item.muhurta.toLowerCase()]}`}>
                                                    <span className={styles.chaughadiyaName}>{item.muhurta}</span>
                                                    <span className={styles.chaughadiyaTime}>{item.time}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShubhMuhuratCalendarPage;
