import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom';

export default function juzDetail() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const location = useLocation();
    const index = location.state?.index;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [juzData, setJuzData] = useState(null);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetchJuzData();
    }, [index]);

    async function fetchJuzData() {
        const apiUrl = `http://api.alquran.cloud/v1/juz/${index}/quran-uthmani`;

        try {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setJuzData(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching juz data:', error);
        }
    }

    if (!juzData) {
        return <div>Loading...</div>;
    }

    function convertToArabic(num) {
        const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
        return num.toString().split('').map(number => arabicNumbers[number]).join('');
    }

    return (
        <section className="bgImage">
            <div className="whiteBg mx-auto max-w-6xl py-4 px-8">
                <h1 className='text-center my-2 text-gray-700 text-2xl lg:text-5xl font'>بِسْمِ ٱللّٰهِ الرَّحْمٰنِ
                    الرَّحِيْمِ</h1>
                <h1 className="text-lg lg:text-2xl mt-4 mb-2"></h1>
                <div className="p-5">

                    {juzData.data.ayahs.map((ayah, index) => (
                        <div key={index} className="flex item-end md:justify-between w-[100%] flex-col md:flex-row items-end">
                            <div className="md:w-[50%]">Translation here</div>
                            <div className="md:w-[50%]">
                                <p className="text-right md:text-2xl my-16" style={{lineHeight: '3rem'}}>{ayah.text}
                                    <span
                                        className="p-2 rounded-lg border bg-gray-400 text-white text-md">{convertToArabic(ayah.numberInSurah)}</span>
                                </p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}