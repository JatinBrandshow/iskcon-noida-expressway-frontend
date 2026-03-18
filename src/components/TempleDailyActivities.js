const programs = [
    {
        time: "4:30 AM",
        title: "मंगल आरती",
        desc: "प्रभात में भगवान के दर्शन एवं आरती",
    },
    {
        time: "5:00 AM",
        title: "तुलसी पूजा",
        desc: "श्रीमती तुलसीदेवी की पूजा एवं परिक्रमा",
    },
    {
        time: "5:15 AM",
        title: "जप ध्यान",
        desc: "हरे कृष्ण महामंत्र का जप — सभी भक्त",
    },
    {
        time: "7:15 AM",
        title: "श्रृंगार दर्शन",
        desc: "श्री विग्रहों का भव्य श्रृंगार दर्शन",
    },
    {
        time: "7:30 AM",
        title: "गुरुपूजा",
        desc: "श्रील प्रभुपाद जी की पूजा एवं प्रार्थना",
    },
    {
        time: "8:00 AM",
        title: "श्रीमद् भागवतम्",
        desc: "प्रतिदिन भागवतम् की कक्षा एवं प्रवचन",
    },
    {
        time: "12:00 PM",
        title: "राजभोग आरती",
        desc: "दोपहर की मुख्य आरती एवं भोग अर्पण",
    },
    {
        time: "12:30 PM",
        title: "महाप्रसाद",
        desc: "सभी भक्तों को निःशुल्क प्रसाद वितरण",
    },
    {
        time: "5:00 PM",
        title: "भगवद् गीता कक्षा",
        desc: "गीता के श्लोक एवं उनका भावार्थ",
    },
    {
        time: "7:00 PM",
        title: "संध्या आरती",
        desc: "सायंकालीन दीप आरती एवं कीर्तन",
    },
    {
        time: "7:30 PM",
        title: "भजन एवं कीर्तन",
        desc: "हरे कृष्ण संकीर्तन — सभी आमंत्रित",
    },
    {
        time: "8:30 PM",
        title: "शयन आरती",
        desc: "भगवान की शयन आरती — मंदिर बंद",
    },
];

const TempleDailyActivities = () => {
    return (
        <>
            <section id="program" className="py-[70px] px-[4%] bg-[linear-gradient(180deg,#FFF8E7,#FFE4B5)]">
                <div className="max-w-[1300px] mx-auto">
                    {/* Header */}
                    <div className="text-center mb-[45px]">
                        <span className="inline-block bg-[linear-gradient(135deg,#ff6b00,#ffd700)] text-white px-4 py-[4px] rounded-[20px] text-[0.72rem] font-bold uppercase tracking-[2px] mb-[10px]">
                            प्रतिदिन
                        </span>

                        <h2 className="text-[clamp(1.3rem,2.8vw,2.2rem)] text-primary font-serif mb-[10px]">
                            दैनिक मंदिर कार्यक्रम
                        </h2>

                        <div className="w-[70px] h-[3px] bg-[linear-gradient(90deg,#ff6b00,#ffd700)] mx-auto rounded-[2px]" />

                        <p className="text-[#7A5C4A] mt-[12px] text-[0.92rem]">सोमवार से रविवार — सभी 365 दिन</p>
                    </div>

                    {/* Grid */}
                    <div className="grid gap-[16px] grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
                        {programs.map((item, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-[14px] px-[20px] py-[18px] flex items-center gap-[16px] shadow-[0_4px_20px_rgba(92,10,10,0.08)] border-l-[4px] border-secondary transition-all duration-300 hover:translate-x-[5px] hover:shadow-[0_8px_30px_rgba(92,10,10,0.15)]"
                            >
                                <div className="bg-[linear-gradient(135deg,#5c0a0a,#8B1A1A)] text-tertiary px-[14px] py-[8px] rounded-[10px] text-[0.85rem] font-bold text-center min-w-[90px]">
                                    {item.time}
                                </div>

                                <div>
                                    <h4 className="text-primary font-serif text-[0.85rem] mb-[3px]">{item.title}</h4>
                                    <p className="text-[#7A5C4A] text-[0.78rem]">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default TempleDailyActivities;
