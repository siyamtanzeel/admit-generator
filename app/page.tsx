"use client";
import { students } from "@/constants/studentData";
import Image from "next/image";
import { useState } from "react";
import { Margin, Resolution, usePDF } from "react-to-pdf";

export default function Home() {
  const [student, setStudent] = useState(students[0]);
  const [index, setIndex] = useState(0);
  const { toPDF, targetRef } = usePDF({
    filename: `${student.roll}.pdf`,
    page: { margin: Margin.MEDIUM, orientation: "landscape" },
    resolution: Resolution.HIGH,
  });
  return (
    <div className="bg-white p-5 flex flex-col items-center justify-center">
      <div
        ref={targetRef}
        className="relative h-[770px] w-[1129px] flex items-center justify-center bg-[#0b46a518]">
        <img
          src="/images/logo.png"
          className="absolute z-0 translate-x-[10%] translate-y[50%] opacity-15 w-lg"
          alt=""
        />
        <div className="relative z-40 m-3 h-full w-full ring-2 ring-[#0b47a5] ring-offset-4 border-4 border-[#0b47a5] flex flex-col items-center justify-start py-4">
          {/* first row : Title Texts */}
          <div className="grid grid-cols-7">
            {/* first row 1st column */}
            <div className="col-span-1">
              <Image
                src={"/images/logo.png"}
                width={100}
                height={100}
                className="w-32 h-16 mx-auto mt-5"
                alt="logo"
              />
            </div>
            {/* first row 2nd column */}
            <div className="col-span-5 flex flex-col items-center justify-center space-y-4 text-center py-4">
              <p className="text-[#bb0000] opacity-70 text-xs">
                বিসমিল্লাহির রাহমানির রাহীম
              </p>
              <h3 className="text-xl font-bold text-black w-full">
                মাষ্টার মোকছেদুর রহমান ফাউন্ডেশন এর পৃষ্ঠপোষকতায় <br />
                ও <br />
                সেনবাগ উপজেলা ওয়েলফেয়ার সোসাইটি ইউএসএ ইনক এর সহযোগিতায়
              </h3>
              <h1 className="text-[#0b47a5] text-4xl font-bold">
                স্কাইরক্স বৃত্তি পরীক্ষা ২০২৫
              </h1>
              <p className="text-black text-sm font-bold">
                মইজদীপুর, সেনবাগ, নোয়াখালী
              </p>
              {/* colored box */}
              <div className="w-[240px] h-[50px] grid grid-cols-2 items-center justify-center text-lg font-bold shadow-sm  rounded-r-2xl rounded-l-2xl text-center">
                <span className="bg-[#066406] h-full rounded-l-2xl  border-2 border-white">
                  প্রবেশপত্র
                </span>
                <span className="bg-[#b90505] h-full rounded-r-2xl  border-2 border-white">
                  শ্রেণীঃ ৮ম{" "}
                </span>
              </div>
            </div>
            {/* first row 3rd column */}
            <div className="col-span-1">
              <img
                src={"/images/qr.png"}
                className="w-32 h-32 mx-auto mt-5"
                alt="qr"
              />
              <p className="text-xs w-32 mx-auto text-center text-[#0b47a5]">
                আসন বিন্যাস দেখার জন্য স্ক্যান করুন।
              </p>
            </div>
          </div>
          {/* second row : form */}
          <div className="text-black text-lg w-full px-20">
            {/* second row 1st row */}
            <div className="grid grid-cols-6 gap-2">
              {/* second row 1st row 1st column */}
              <div className="col-span-1 font-bold flex flex-col items-start justify-center">
                <span>পরীক্ষার্থীর নাম</span>
                <span>পিতার নাম</span>
              </div>
              {/* second row 1st row 2nd column */}
              <div className="col-span-2 flex flex-col items-start justify-center">
                <span className="border-dotted border-b-2 pb-2 w-full">
                  : {student.name}
                </span>
                <span className="border-dotted border-b-2 pb-2 w-full">
                  :{student.fatherName}
                </span>
              </div>
              {/* second row 1st row 3rd column */}
              <div className="col-span-1 font-bold flex flex-col items-start justify-center">
                <span>রোল নং </span>
                <span>মাতার নাম</span>
              </div>
              {/* second row 1st row 4th column */}
              <div className="col-span-2 flex flex-col items-start justify-center">
                <span className="border-dotted border-b-2 pb-2 w-full">
                  : {student.roll}
                </span>
                <span className="border-dotted border-b-2 pb-2 w-full">
                  : {student.motherName}
                </span>
              </div>
            </div>
            {/* second row 2nd row */}
            <div className="grid grid-cols-6 gap-2">
              {/* second row 2nd row 1st column */}
              <div className="col-span-1 font-bold flex flex-col items-start justify-center">
                <span>বিদ্যালয়</span>
                <span>কেন্দ্র</span>
              </div>
              {/* second row 2nd row 2nd column */}
              <div className="col-span-5 flex flex-col items-start justify-center">
                <span className="border-dotted border-b-2 pb-2 w-full">
                  : {student.school}
                </span>
                <span className="border-dotted border-b-2 pb-2 w-full">
                  : {student.centre}
                </span>
              </div>
            </div>
            {/* second row 3rd row */}
            <div className="grid grid-cols-6 gap-2">
              {/* second row 3rd row 1st column */}
              <div className="col-span-1 font-bold flex flex-col items-start justify-center">
                <span>পরীক্ষার তারিখ </span>
              </div>
              {/* second row 3rd row 2nd column */}
              <div className="col-span-2 flex flex-col items-start justify-center">
                <span className="border-dotted border-b-2 pb-2 w-full">
                  : ১৩ ডিসেম্বর ২০২৫
                </span>
              </div>
              {/* second row 3rd row 3rd column */}
              <div className="col-span-1 font-bold flex flex-col items-start justify-center">
                <span>সময় </span>
              </div>
              {/* second row 3rd row 4th column */}
              <div className="col-span-2 flex flex-col items-start justify-center">
                <span className="border-dotted border-b-2 pb-2 w-full">
                  : ১০ঃ০০ - ১১ঃ৩০
                </span>
              </div>
            </div>
          </div>
          {/* third row : Rules and Signature */}
          <div className="grid grid-cols-7 gap-20 mt-10 px-20">
            <div className="col-span-5 flex flex-col items-start justify-center space-y-3">
              <h4 className="text-[#0b47a5] text-xl">বি: দ্রঃ</h4>
              <p className="text-sm text-black">
                ১. পরীক্ষা শুরুর ৩০ মিনিট পূর্বে পরীক্ষার্থীকে পরীক্ষা কেন্দ্রে
                উপস্থিত হতে হবে। <br />
                ২. ঘড়ি, ক্যালকুলেটরসহ কোনো ধরণের ইলেকট্রনিক ডিভাইস নিয়ে কেন্দ্রে
                প্রবেশ করা যাবেনা। <br />
                ৩. কোনো পরীক্ষার্থীর পক্ষে বহিরাগত কোনো শিক্ষার্থী পরীক্ষায়
                অংশগ্রহণ করলে পরীক্ষার্থীর পরীক্ষা বাতিলসহ তার বিরুদ্ধে আইনানুগ
                ব্যবস্থা গ্রহণ করা হবে।
              </p>
            </div>
            <div className="col-span-2 flex items-end justify-center text-center">
              <p className="border-t-2 border-dashed py-2 text-black w-full">
                {" "}
                পরীক্ষা নিয়ন্ত্রক{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mx-auto">
        <input
          type="number"
          className="px-3 py-2 mt-20 rounded-2xl outline outline-indigo-500 text-black"
          name=""
          id=""
          value={index}
          onChange={(e) => {
            const newIndex = parseInt(e.target.value) || 0;
            if (newIndex >= 0 && newIndex < students.length) {
              setIndex(newIndex);
              setStudent(students[newIndex]);
            }
          }}
        />
        <button
          type="button"
          className="bg-indigo-500 px-3 py-2 rounded-lg mt-7"
          onClick={() => {
            const currentIndex = index;
            if (currentIndex >= 0 && currentIndex < students.length) {
              // Update student first
              const selectedStudent = students[currentIndex];
              setStudent(selectedStudent);

              // Use requestAnimationFrame to ensure DOM is updated
              toPDF();
            }
          }}>
          Download PDF
        </button>
      </div>
    </div>
  );
}
