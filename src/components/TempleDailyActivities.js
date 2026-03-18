import { Clock } from "lucide-react";

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
            <section className="py-20 px-5 bg-[#fff7ed]">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif text-orange-900">दैनिक मंदिर कार्यक्रम</h2>
                        <p className="text-orange-700 text-sm mt-2">सोमवार से रविवार — सभी 365 दिन</p>
                    </div>

                    {/* Grid */}
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {programs.map((item, i) => (
                            <div
                                key={i}
                                className="group relative bg-white rounded-2xl p-5 shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                {/* 🔶 Semi Circle Shape (TOP RIGHT) */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary opacity-20 rounded-full blur-2xl"></div>

                                {/* Optional Sharp Half Circle */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/50 opacity-20 rounded-bl-[100px]"></div>

                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-linear-to-br from-orange-400 to-yellow-300 opacity-0 group-hover:opacity-10 transition duration-300"></div>

                                {/* Time Badge */}
                                <div className="flex items-center gap-2 mb-3 relative z-10">
                                    <Clock size={16} className="text-orange-500" />
                                    <span className="text-xs font-semibold text-orange-600 bg-orange-100 px-2 py-1 rounded-md">
                                        {item.time}
                                    </span>
                                </div>

                                {/* Title */}
                                <h4 className="text-orange-900 font-semibold text-base mb-1 relative z-10">
                                    {item.title}
                                </h4>

                                {/* Description */}
                                <p className="text-orange-700 text-sm relative z-10">{item.desc}</p>

                                {/* Bottom Accent Line */}
                                <div className="absolute bottom-0 left-0 w-0 h-0.75 bg-linear-to-r from-orange-500 to-yellow-400 group-hover:w-full transition-all duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default TempleDailyActivities;
