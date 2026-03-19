"use client";
import { IMAGE_PATH } from "@/configs/config";
import Image from "next/image";
import Link from "next/link";

export default function Holder({ data }) {
    if (!data) return null;

    return (
        <div className="p-6 sm:p-10 space-y-8">
            {/* Title & Type */}
            <div className="flex flex-wrap items-center gap-4">
                {data.param && (
                    <h3 className="text-2xl sm:text-3xl font-novaBold text-gray-900 leading-tight">
                        {data.param}
                    </h3>
                )}
                {data.type && (
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider">
                        {data.type}
                    </span>
                )}
            </div>

            {/* Description */}
            {data.paramDesc && (
                <div 
                    className="prose prose-lg max-w-none font-novaReg text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: data.paramDesc }}
                />
            )}

            {/* Images Grid */}
            {data.paramImg && Array.isArray(data.paramImg) && data.paramImg.length > 0 && (
                <div className={`grid gap-6 ${data.paramImg.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                    {data.paramImg.map((img, idx) => (
                        <div key={idx} className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                            <Image 
                                src={img.startsWith('http') ? img : `${IMAGE_PATH}${img}`}
                                alt={`${data.param || 'Holder image'} ${idx + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            )}

            {/* PDF Attachments */}
            {data.pdfs && Array.isArray(data.pdfs) && data.pdfs.length > 0 && (
                <div className="space-y-3">
                    <h4 className="text-sm font-novaBold text-gray-400 uppercase tracking-widest">Attachments</h4>
                    <div className="grid gap-3">
                        {data.pdfs.map((pdf, idx) => (
                            <a 
                                key={idx}
                                href={pdf.startsWith('http') ? pdf : `${IMAGE_PATH}${pdf}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center p-4 bg-gray-50 hover:bg-white border border-gray-100 hover:border-blue-200 rounded-xl transition-all group"
                            >
                                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span className="text-gray-700 font-novaSemi truncate">
                                    {typeof pdf === 'string' ? pdf.split('/').pop() : 'View Document'}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            )}

            {/* Call to Action */}
            {data.paramUrl && (
                <div className="pt-4">
                    <Link 
                        href={data.paramUrl}
                        className="inline-flex items-center px-8 py-3 bg-secondary text-white rounded-xl font-novaBold hover:bg-primary transition-colors shadow-lg shadow-secondary/10 hover:shadow-primary/20"
                    >
                        Learn More
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
            )}

            {/* Nested Extra Data (Recursive) */}
            {data.extraData && Array.isArray(data.extraData) && data.extraData.length > 0 && (
                <div className="mt-10 pl-6 border-l-2 border-gray-100 space-y-10">
                    {data.extraData.map((child, idx) => (
                        <Holder key={child._id || idx} data={child} />
                    ))}
                </div>
            )}
        </div>
    );
}
