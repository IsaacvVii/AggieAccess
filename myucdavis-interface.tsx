"use client"

import { useState } from "react"
import { ChevronDown, X, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function MyUCDavisScheduleBuilder() {
  const [schedule, setSchedule] = useState("1")

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-[#13639e] text-white">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center space-x-4">
            <div className="font-bold text-xl text-[#f2c75c]">
              my<span className="text-white">ucdavis</span>
            </div>
            <nav className="hidden md:flex space-x-1">
              <div className="relative group">
                <button className="px-3 py-2 flex items-center hover:bg-[#0e4c7a]">
                  Academics <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="px-3 py-2 flex items-center hover:bg-[#0e4c7a]">
                  Finances and Jobs <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="px-3 py-2 flex items-center hover:bg-[#0e4c7a]">
                  Student Life <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="px-3 py-2 flex items-center hover:bg-[#0e4c7a]">
                  Resources <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <button className="px-3 py-2 hover:bg-[#0e4c7a]">Contact an Expert</button>
            </nav>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-2 py-1 text-sm hover:bg-[#0e4c7a] flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              myEmail
            </button>
            <button className="px-2 py-1 text-sm hover:bg-[#0e4c7a] flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              Raquib
            </button>
          </div>
        </div>
      </header>

      {/* Sub Header */}
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

      {/* Main Content */}
      <div className="flex-1 p-4">
        {/* Pass Information */}
        <div className="bg-white p-4 mb-4 border rounded shadow-sm">
          <div className="flex flex-wrap justify-center gap-4 text-center">
            <div className="font-semibold">Pass 1: Feb 10, 2025 04:00 PM</div>
            <div className="font-semibold">Pass 2: Mar 03, 2025 04:00 PM</div>
          </div>
        </div>

        {/* Note */}
        <div className="bg-[#fff9e6] border border-[#f2c75c] p-3 mb-4 text-sm">
          <p>
            Note: Some courses may have reserved seats held for certain student populations. For more information,
            please visit: https://registrar.ucdavis.edu/registration/register-for-classes/reserved-seat.
          </p>
        </div>

        {/* Search */}
        <div className="bg-white p-4 mb-4 border rounded shadow-sm">
          <div className="mb-2">Search for courses by CRN, subject, instructor last name, or keyword:</div>
          <div className="flex">
            <Input placeholder="e.g. ECS70" className="max-w-md rounded-r-none focus-visible:ring-0" />
            <Button className="bg-[#13639e] hover:bg-[#0e4c7a] rounded-l-none">SEARCH</Button>
          </div>
        </div>

        {/* Schedule Section */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/4">
            <div className="bg-[#e6eef7] p-2 mb-2 border border-[#c5d5e6] flex justify-between items-center">
              <div className="font-bold">SCHEDULE:</div>
              <div className="flex items-center">
                <span>Schedule 1</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="bg-white">
                  Spring Quarter 2025
                </Button>
                <Button variant="outline" size="sm" className="bg-white">
                  Finals
                </Button>
                <Button variant="outline" size="sm" className="bg-white">
                  Print
                </Button>
                <Button variant="outline" size="sm" className="bg-white">
                  View
                </Button>
              </div>
            </div>

            {/* Alerts */}
            <Alert className="bg-[#f8d7da] border-[#f5c6cb] text-[#721c24] mb-2 relative">
              <AlertDescription className="flex justify-between">
                <span>
                  Please check your Pass 2 registration appointment. You may only register during your appointment time.
                </span>
                <X className="h-4 w-4 cursor-pointer" />
              </AlertDescription>
            </Alert>

            <Alert className="bg-[#fff3cd] border-[#ffeeba] text-[#856404] mb-2 relative">
              <AlertDescription>
                <div className="font-bold">WARNING:</div>
                <div>Our records indicate you are currently enrolled in the prerequisite course below:</div>
                <ul className="list-disc ml-6 mt-1">
                  <li>MAT 022A</li>
                </ul>
                <div className="mt-2">
                  If you receive a grade that does not meet the prerequisite requirement, the instructor of the course
                  may request you be dropped from the course.
                </div>
                <div className="mt-2">
                  Please refer to the course details from the class search results or the{" "}
                  <a href="#" className="text-blue-600 underline">
                    general catalog
                  </a>{" "}
                  for the complete restrictions on this course. The prerequisites listed here are only course based
                  requirements.
                </div>
              </AlertDescription>
              <X className="absolute top-2 right-2 h-4 w-4 cursor-pointer" />
            </Alert>

            {/* Course List */}
            <div className="mb-2">
              <Alert className="bg-[#f8d7da] border-[#f5c6cb] text-[#721c24] mb-2 relative">
                <AlertDescription className="flex justify-between">
                  <span>This course is full and there are currently 23 student(s) on the waitlist.</span>
                  <X className="h-4 w-4 cursor-pointer" />
                </AlertDescription>
              </Alert>

              <div className="border rounded mb-4 bg-white">
                <div className="flex justify-between items-center p-2 border-b">
                  <div className="font-bold">ECS 171 001 – Machine Learning</div>
                  <div>
                    <Button size="sm" variant="outline" className="bg-[#13639e] text-white hover:bg-[#0e4c7a]">
                      Actions <ChevronDown className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <div className="p-3">
                  <div className="flex justify-between">
                    <div>
                      <div>Open / Waitlist: 0/23</div>
                      <div>CRN: 38262</div>
                      <div>Units: 4</div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="mt-1 bg-[#f8f9fa] border-[#d3d9df] text-[#212529] flex items-center"
                      >
                        <Info className="mr-1 h-3 w-3" /> SHOW IMPORTANT DETAILS
                      </Button>
                    </div>
                    <div>
                      <Badge className="bg-[#dc3545] text-white">Waitlisted</Badge>
                      <div className="text-sm mt-1">You are #2 on the waitlist</div>
                    </div>
                  </div>
                </div>
              </div>

              <Alert className="bg-[#f8d7da] border-[#f5c6cb] text-[#721c24] mb-2 relative">
                <AlertDescription className="flex justify-between">
                  <span>This course is full and there are currently 17 student(s) on the waitlist.</span>
                  <X className="h-4 w-4 cursor-pointer" />
                </AlertDescription>
              </Alert>

              <Alert className="bg-[#f8d7da] border-[#f5c6cb] text-[#721c24] mb-2 relative">
                <AlertDescription className="flex justify-between">
                  <span>You have exceeded the 19 unit limit.</span>
                  <X className="h-4 w-4 cursor-pointer" />
                </AlertDescription>
              </Alert>

              <div className="border rounded mb-4 bg-white">
                <div className="flex justify-between items-center p-2 border-b">
                  <div className="font-bold">ECS 188 002 – Ethics in an Age of Technology</div>
                  <div>
                    <Button size="sm" variant="outline" className="bg-[#13639e] text-white hover:bg-[#0e4c7a]">
                      Actions <ChevronDown className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <div className="p-3">
                  <div className="flex justify-between">
                    <div>
                      <div>Open / Waitlist: 0/17</div>
                      <div>CRN: 38266</div>
                      <div>Units: 4</div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="mt-1 bg-[#f8f9fa] border-[#d3d9df] text-[#212529] flex items-center"
                      >
                        <Info className="mr-1 h-3 w-3" /> SHOW IMPORTANT DETAILS
                      </Button>
                    </div>
                    <div>
                      <Badge className="bg-[#ffc107] text-[#212529]">Not Registered</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded mb-4 bg-white">
                <div className="flex justify-between items-center p-2 border-b">
                  <div className="font-bold">CMN 001 A08 – Introduction to Public Speaking</div>
                  <div>
                    <Button size="sm" variant="outline" className="bg-[#13639e] text-white hover:bg-[#0e4c7a]">
                      Actions <ChevronDown className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <div className="p-3">
                  <div className="flex justify-between">
                    <div>
                      <div>Open / Waitlist: 0/2</div>
                      <div>CRN: 35028</div>
                      <div>Units: 4</div>
                      <div>
                        Letter Grading <Badge className="ml-1 bg-gray-200 text-gray-800 text-xs">GE</Badge>
                      </div>
                      <Button size="sm" variant="outline" className="mt-1 bg-[#f8f9fa] border-[#d3d9df] text-[#212529]">
                        SHOW DETAILS
                      </Button>
                    </div>
                    <div>
                      <Badge className="bg-[#28a745] text-white">Registered</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded mb-4 bg-white">
                <div className="flex justify-between items-center p-2 border-b">
                  <div className="font-bold">ECS 132 001 – Probability & Statistical Modeling for Computer Science</div>
                  <div>
                    <Button size="sm" variant="outline" className="bg-[#13639e] text-white hover:bg-[#0e4c7a]">
                      Actions <ChevronDown className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <div className="p-3">
                  <div className="flex justify-between">
                    <div>
                      <div>Open / Waitlist: 0/1</div>
                      <div>CRN: 38252</div>
                      <div>Units: 4</div>
                      <div>
                        Letter Grading <Badge className="ml-1 bg-gray-200 text-gray-800 text-xs">GE</Badge>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="mt-1 bg-[#f8f9fa] border-[#d3d9df] text-[#212529] flex items-center"
                      >
                        <Info className="mr-1 h-3 w-3" /> SHOW IMPORTANT DETAILS
                      </Button>
                    </div>
                    <div>
                      <Badge className="bg-[#28a745] text-white">Registered</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:w-1/4">
            <div className="bg-[#f2c75c] p-2 font-bold border border-[#e6b94c] mb-2">SUGGESTED COURSES</div>
            <div className="bg-white border mb-4">
              <div className="p-2 border-b bg-[#f8f9fa]">OASIS Advising:</div>
              <div className="p-2 border-b">
                CE/STA Double Major <span className="text-xs text-gray-600">(2/21/2024)</span>
              </div>
              <div className="p-2 border-b">
                CE with STA Minor <span className="text-xs text-gray-600">(2/21/2024)</span>
              </div>
              <div className="p-2 border-b">
                <span className="text-xs text-gray-600">(4/18/2024)</span>
              </div>
              <div className="p-2 border-b">
                <span className="text-xs text-gray-600">(10/17/2024)</span>
              </div>
              <div className="p-2 border-b">
                Advising <span className="text-xs text-gray-600">(9/6/2025)</span>
              </div>
              <div className="p-2">Computer Engineering 2023-2024</div>
            </div>

            <div className="bg-[#f2c75c] p-2 font-bold border border-[#e6b94c] mb-2 flex justify-between items-center">
              <div>PREVIOUSLY SAVED COURSES</div>
              <Button size="sm" variant="outline" className="bg-white text-xs">
                Options <ChevronDown className="ml-1 h-3 w-3" />
              </Button>
            </div>
            <div className="bg-white border mb-4">
              <div className="border-b p-2 flex justify-between">
                <div>
                  <div className="flex justify-between">
                    <div>ASA 002 – Contemporary Issues of Asian Americans</div>
                    <X className="h-4 w-4 cursor-pointer" />
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="mt-1 text-xs bg-[#f8f9fa] border-[#d3d9df] text-[#212529]"
                  >
                    SHOW DETAILS
                  </Button>
                </div>
                <div className="text-right">
                  <div>Units: 4</div>
                </div>
              </div>
              <div className="p-2 flex justify-center">
                <Button size="sm" variant="outline" className="text-xs bg-[#f8f9fa] border-[#d3d9df] text-[#212529]">
                  SHOW SECTIONS
                </Button>
              </div>

              <div className="border-t border-b p-2 flex justify-between">
                <div>
                  <div className="flex justify-between">
                    <div>CHI 010 – Introduction to Chicana/o Studies</div>
                    <X className="h-4 w-4 cursor-pointer" />
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="mt-1 text-xs bg-[#f8f9fa] border-[#d3d9df] text-[#212529]"
                  >
                    SHOW DETAILS
                  </Button>
                </div>
                <div className="text-right">
                  <div>Units: 4</div>
                </div>
              </div>
              <div className="p-2 flex justify-center">
                <Button size="sm" variant="outline" className="text-xs bg-[#f8f9fa] border-[#d3d9df] text-[#212529]">
                  SHOW SECTIONS
                </Button>
              </div>

              {/* More saved courses */}
              <div className="border-t border-b p-2 flex justify-between">
                <div>
                  <div className="flex justify-between">
                    <div>CMN 001 – Introduction to Public Speaking</div>
                    <X className="h-4 w-4 cursor-pointer" />
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="mt-1 text-xs bg-[#f8f9fa] border-[#d3d9df] text-[#212529]"
                  >
                    SHOW DETAILS
                  </Button>
                </div>
                <div className="text-right">
                  <div>Units: 4</div>
                </div>
              </div>
              <div className="p-2 flex justify-center">
                <Button size="sm" variant="outline" className="text-xs bg-[#f8f9fa] border-[#d3d9df] text-[#212529]">
                  SHOW SECTIONS
                </Button>
              </div>

              <div className="border-t border-b p-2 flex justify-between">
                <div>
                  <div className="flex justify-between">
                    <div>ECS 132 – Probability & Statistical Modeling for Computer Science</div>
                    <X className="h-4 w-4 cursor-pointer" />
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="mt-1 text-xs bg-[#f8f9fa] border-[#d3d9df] text-[#212529] flex items-center"
                  >
                    <Info className="mr-1 h-3 w-3" /> SHOW IMPORTANT DETAILS
                  </Button>
                </div>
                <div className="text-right">
                  <div>Units: 4</div>
                </div>
              </div>
              <div className="p-2 flex justify-center">
                <Button size="sm" variant="outline" className="text-xs bg-[#f8f9fa] border-[#d3d9df] text-[#212529]">
                  SHOW SECTIONS
                </Button>
              </div>

              <div className="border-t border-b p-2 flex justify-between">
                <div>
                  <div className="flex justify-between">
                    <div>ECS 154A – Computer Architecture</div>
                    <X className="h-4 w-4 cursor-pointer" />
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="mt-1 text-xs bg-[#f8f9fa] border-[#d3d9df] text-[#212529] flex items-center"
                  >
                    <Info className="mr-1 h-3 w-3" /> SHOW IMPORTANT DETAILS
                  </Button>
                </div>
                <div className="text-right">
                  <div>Units: 4</div>
                </div>
              </div>
              <div className="p-2 flex justify-center">
                <Button size="sm" variant="outline" className="text-xs bg-[#f8f9fa] border-[#d3d9df] text-[#212529]">
                  SHOW SECTIONS
                </Button>
              </div>

              <div className="border-t border-b p-2 flex justify-between">
                <div>
                  <div className="flex justify-between">
                    <div>ECS 161 – Modern Programming Tools</div>
                    <X className="h-4 w-4 cursor-pointer" />
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="mt-1 text-xs bg-[#f8f9fa] border-[#d3d9df] text-[#212529] flex items-center"
                  >
                    <Info className="mr-1 h-3 w-3" /> SHOW IMPORTANT DETAILS
                  </Button>
                </div>
                <div className="text-right">
                  <div>Units: 4</div>
                </div>
              </div>
              <div className="p-2 flex justify-center">
                <Button size="sm" variant="outline" className="text-xs bg-[#f8f9fa] border-[#d3d9df] text-[#212529]">
                  SHOW SECTIONS
                </Button>
              </div>

              <div className="border-t p-2 flex justify-between">
                <div>
                  <div className="flex justify-between">
                    <div>ECS 162 – Web Programming</div>
                    <X className="h-4 w-4 cursor-pointer" />
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="mt-1 text-xs bg-[#f8f9fa] border-[#d3d9df] text-[#212529] flex items-center"
                  >
                    <Info className="mr-1 h-3 w-3" /> SHOW IMPORTANT DETAILS
                  </Button>
                </div>
                <div className="text-right">
                  <div>Units: 4</div>
                </div>
              </div>
              <div className="p-2 flex justify-center">
                <Button size="sm" variant="outline" className="text-xs bg-[#f8f9fa] border-[#d3d9df] text-[#212529]">
                  SHOW SECTIONS
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Button */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2">
        <button className="bg-[#13639e] text-white py-2 px-4 rotate-90 transform origin-right">Feedback</button>
      </div>
    </div>
  )
}

