"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DegreeProgress } from "./degree-progress"
import { ScheduleBuilder } from "./schedule-builder"
import { MyBill } from "./my-bill"
import { CourseAdvisorChat } from "./course-advisor-chat"

export function MainTabs() {
  const [activeTab, setActiveTab] = useState("my-degree")

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-[#13639e] text-white">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-8">
            <div className="text-xl">
              <span className="text-[#f2c75c]">my</span>
              <span>ucdavis</span>
            </div>
            <nav className="hidden md:flex gap-6">
              <button className="flex items-center gap-1 hover:bg-[#0e4c7a] px-3 py-2">
                Academics
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button className="flex items-center gap-1 hover:bg-[#0e4c7a] px-3 py-2">
                Finances and Jobs
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button className="flex items-center gap-1 hover:bg-[#0e4c7a] px-3 py-2">
                Student Life
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button className="flex items-center gap-1 hover:bg-[#0e4c7a] px-3 py-2">
                Resources
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button className="hover:bg-[#0e4c7a] px-3 py-2">Contact an Expert</button>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 hover:bg-[#0e4c7a] px-3 py-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              myEmail
            </button>
            <button className="flex items-center gap-1 hover:bg-[#0e4c7a] px-3 py-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              Raquib Md Alam
            </button>
          </div>
        </div>
      </header>

      {/* Main Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="container mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-5 h-auto">
              <TabsTrigger
                value="my-degree"
                className="data-[state=active]:bg-[#f2c75c] data-[state=active]:text-[#13639e] py-3"
              >
                My Degree
              </TabsTrigger>
              <TabsTrigger
                value="schedule-builder"
                className="data-[state=active]:bg-[#f2c75c] data-[state=active]:text-[#13639e] py-3"
              >
                Schedule Builder
              </TabsTrigger>
              <TabsTrigger
                value="course-catalog"
                className="data-[state=active]:bg-[#f2c75c] data-[state=active]:text-[#13639e] py-3"
              >
                Course Catalog
              </TabsTrigger>
              <TabsTrigger
                value="my-bill"
                className="data-[state=active]:bg-[#f2c75c] data-[state=active]:text-[#13639e] py-3"
              >
                MyBill
              </TabsTrigger>
              <TabsTrigger
                value="academic-history"
                className="data-[state=active]:bg-[#f2c75c] data-[state=active]:text-[#13639e] py-3"
              >
                Academic History
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Sub Navigation for My Degree */}
      {activeTab === "my-degree" && (
        <div className="bg-white border-b">
          <div className="container mx-auto">
            <Tabs defaultValue="academic">
              <TabsList className="h-auto">
                <TabsTrigger value="worksheets" className="py-2">
                  WORKSHEETS
                </TabsTrigger>
                <TabsTrigger value="academic" className="py-2">
                  Academic
                </TabsTrigger>
                <TabsTrigger value="what-if" className="py-2">
                  What-If
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      )}

      {/* Sub Navigation for Schedule Builder */}
      {activeTab === "schedule-builder" && (
        <div className="bg-[#13639e] text-white border-t border-[#1a74b8] shadow-md">
          <div className="flex flex-wrap items-center">
            <div className="font-bold px-4 py-2 text-lg">Schedule Builder</div>
            <div className="flex flex-wrap">
              <button className="px-4 py-2 hover:bg-[#0e4c7a] text-sm">Add / Search Courses</button>
              <button className="px-4 py-2 hover:bg-[#0e4c7a] text-sm">Create New Schedule</button>
              <button className="px-4 py-2 hover:bg-[#0e4c7a] text-sm">Pre-Check Registration</button>
              <button className="px-4 py-2 hover:bg-[#0e4c7a] text-sm">Register/Add Changes</button>
              <button className="px-4 py-2 hover:bg-[#0e4c7a] text-sm">Help</button>
            </div>
            <div className="ml-auto px-4 py-1">
              <div className="bg-[#f2c75c] text-[#13639e] font-bold px-3 py-1 rounded">AGGIE MORE</div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 bg-gray-100">
        {activeTab === "my-degree" && <DegreeProgress />}
        {activeTab === "schedule-builder" && <ScheduleBuilder />}
        {activeTab === "course-catalog" && (
          <div className="text-center py-12 text-gray-500">Course Catalog content will go here</div>
        )}
        {activeTab === "my-bill" && <MyBill />}
        {activeTab === "academic-history" && (
          <div className="text-center py-12 text-gray-500">Academic History content will go here</div>
        )}
      </div>

      {/* Feedback Button */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2">
        <button className="bg-[#13639e] text-white py-2 px-4 rotate-90 transform origin-right">Feedback</button>
      </div>

      {/* Chat Advisor */}
      <CourseAdvisorChat />
    </div>
  )
}

