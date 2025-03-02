"use client"

import { useState } from "react"
import { ChevronDown, X, AlertCircle, Info, CheckCircle, XCircle, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CourseAdvisorChat } from "./components/course-advisor-chat"

export default function IntegratedPlatform() {
  const [activeTab, setActiveTab] = useState("schedule-builder")
  const [degreeProgress, setDegreeProgress] = useState(69)
  const [showInProgress, setShowInProgress] = useState(true)
  const [showPreregistered, setShowPreregistered] = useState(true)

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
              Raquib Md Alam
            </button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-6">
                  <button className="px-3 py-2 text-left hover:bg-gray-100 rounded-md">Academics</button>
                  <button className="px-3 py-2 text-left hover:bg-gray-100 rounded-md">Finances and Jobs</button>
                  <button className="px-3 py-2 text-left hover:bg-gray-100 rounded-md">Student Life</button>
                  <button className="px-3 py-2 text-left hover:bg-gray-100 rounded-md">Resources</button>
                  <button className="px-3 py-2 text-left hover:bg-gray-100 rounded-md">Contact an Expert</button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="container mx-auto">
          <Tabs defaultValue="my-degree" className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-5 h-auto">
              <TabsTrigger
                value="my-degree"
                className="data-[state=active]:bg-[#f2c75c] data-[state=active]:text-[#13639e] py-3"
                onClick={() => setActiveTab("my-degree")}
              >
                My Degree
              </TabsTrigger>
              <TabsTrigger
                value="schedule-builder"
                className="data-[state=active]:bg-[#f2c75c] data-[state=active]:text-[#13639e] py-3"
                onClick={() => setActiveTab("schedule-builder")}
              >
                Schedule Builder
              </TabsTrigger>
              <TabsTrigger
                value="course-catalog"
                className="data-[state=active]:bg-[#f2c75c] data-[state=active]:text-[#13639e] py-3"
                onClick={() => setActiveTab("course-catalog")}
              >
                Course Catalog
              </TabsTrigger>
              <TabsTrigger
                value="registration"
                className="data-[state=active]:bg-[#f2c75c] data-[state=active]:text-[#13639e] py-3"
                onClick={() => setActiveTab("registration")}
              >
                Registration
              </TabsTrigger>
              <TabsTrigger
                value="academic-history"
                className="data-[state=active]:bg-[#f2c75c] data-[state=active]:text-[#13639e] py-3"
                onClick={() => setActiveTab("academic-history")}
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
      <div className="flex-1 p-4">
        {activeTab === "my-degree" && (
          <div className="container mx-auto">
            {/* Format Selector */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4">
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <div className="text-sm text-gray-500 mb-2">Format</div>
                  <div className="flex items-center justify-between border rounded-md p-2">
                    <span>Student View</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Degree Progress */}
              <div className="md:w-3/4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <h3 className="text-lg font-medium mb-4">Degree progress</h3>
                        <div className="relative w-32 h-32 mx-auto">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-sm text-gray-500">UC GPA</div>
                              <div className="text-2xl font-bold">3.588</div>
                            </div>
                          </div>
                          <svg className="w-full h-full" viewBox="0 0 36 36">
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#eee"
                              strokeWidth="2"
                            />
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#f2c75c"
                              strokeWidth="2"
                              strokeDasharray={`${degreeProgress}, 100`}
                            />
                            <text x="18" y="20.35" textAnchor="middle" className="text-xs">
                              {degreeProgress}%
                            </text>
                          </svg>
                        </div>
                        <div className="text-center mt-2">Requirements</div>
                      </div>

                      <div className="md:w-2/3 flex items-center">
                        <div className="w-full">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center gap-2">
                              <Checkbox id="in-progress" checked={showInProgress} onCheckedChange={setShowInProgress} />
                              <label htmlFor="in-progress" className="text-sm">
                                In-progress classes
                              </label>
                            </div>
                            <div className="flex items-center gap-2">
                              <Checkbox
                                id="preregistered"
                                checked={showPreregistered}
                                onCheckedChange={setShowPreregistered}
                              />
                              <label htmlFor="preregistered" className="text-sm">
                                Preregistered classes
                              </label>
                            </div>
                            <Button className="bg-[#13639e] hover:bg-[#0e4c7a] ml-auto">PROCESS</Button>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="border rounded-md p-3">
                              <div className="flex justify-between items-center mb-2">
                                <div className="font-medium">Major Requirements</div>
                                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">75% Complete</Badge>
                              </div>
                              <Progress value={75} className="h-2 bg-gray-200" indicatorClassName="bg-[#f2c75c]" />
                              <div className="mt-2 text-sm text-gray-600">
                                <span className="font-medium">Remaining:</span> 3 upper division courses
                              </div>
                            </div>

                            <div className="border rounded-md p-3">
                              <div className="flex justify-between items-center mb-2">
                                <div className="font-medium">General Education</div>
                                <Badge className="bg-red-100 text-red-800 hover:bg-red-100">60% Complete</Badge>
                              </div>
                              <Progress value={60} className="h-2 bg-gray-200" indicatorClassName="bg-[#f2c75c]" />
                              <div className="mt-2 text-sm text-gray-600">
                                <span className="font-medium">Remaining:</span> 2 Arts &amp; Humanities, 1 Social
                                Science
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-between items-center mt-4 mb-2">
                  <div className="text-sm text-gray-500">Audit date 02/27/2025 11:27 AM</div>
                  <Button variant="ghost" size="sm" className="text-[#13639e]">
                    Collapse all <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </div>

                {/* University Requirements */}
                <Card className="mb-4">
                  <CardHeader className="py-4 px-6">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg font-medium">
                        University Requirements for Bachelor of Science
                      </CardTitle>
                      <Badge className="bg-red-100 text-red-800 hover:bg-red-100">INCOMPLETE</Badge>
                    </div>
                    <div className="flex gap-6 text-sm mt-2">
                      <div>
                        <span className="font-medium">Units required:</span> 180
                      </div>
                      <div>
                        <span className="font-medium">Units applied:</span> 133.5
                      </div>
                      <div>
                        <span className="font-medium">Catalog year:</span> 2023-2024
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <div className="text-sm mb-4">
                      <div className="font-medium mb-2">Unmet conditions for this set of requirements:</div>
                      <p>
                        A minimum of 180 quarter units is required for graduation. You have currently completed 133.5
                        and you still need 46.5 more units.
                      </p>
                      <p className="mt-2 text-gray-600">
                        NOTE: (1)My Degree is a guide, NOT an official degree check. This audit does not replace
                        academic advising from your department and Deans&apos; Office. (2)The unit totals in the block
                        headers may include excess transfer work. Refer to the 180 unit check block to verify completion
                        of 180 units.
                      </p>
                    </div>

                    <div className="space-y-4 mt-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-medium">
                            Your UC GPA is currently above the 2.0 minimum required at UC Davis. This reflects current
                            completed coursework and is subject to change
                          </div>
                        </div>
                        <div className="ml-auto">
                          <div className="text-right font-medium">3.653</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-medium">GPA from all Engineering coursework</div>
                        </div>
                        <div className="ml-auto">
                          <div className="text-right font-medium">Engineering GPA</div>
                          <div className="text-right">3.653</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-medium">One academic year (three quarters) in residence at UC Davis</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                        <div>
                          <div className="font-medium">Senior Residence Requirement</div>
                        </div>
                        <div className="ml-auto">
                          <div className="text-right text-red-600 font-medium">Still needed:</div>
                          <div className="text-right">
                            35 of the final 45 quarter units completed before graduation must be earned while in
                            residence on the UC Davis Campus.
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-medium">American History and Institutions</div>
                        </div>
                        <div className="ml-auto">
                          <div className="text-right">American History &amp; Inst</div>
                          <div className="text-right font-medium text-green-600">Satisfied</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                        <div>
                          <div className="font-medium">English Composition Requirement, College of Engineering</div>
                        </div>
                        <div className="ml-auto">
                          <div className="text-right text-red-600 font-medium">Still needed:</div>
                          <div className="text-right">
                            See <span className="text-blue-600">English Composition Requirement, COE</span> section
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                        <div>
                          <div className="font-medium">General Education Requirements</div>
                        </div>
                        <div className="ml-auto">
                          <div className="text-right text-red-600 font-medium">Still needed:</div>
                          <div className="text-right">
                            See <span className="text-blue-600">General Education</span> section
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                        <div>
                          <div className="font-medium">180 unit check</div>
                        </div>
                        <div className="ml-auto">
                          <div className="text-right text-red-600 font-medium">Still needed:</div>
                          <div className="text-right">This will be calculated when you have filed to graduate.</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                        <div>
                          <div className="font-medium">File to graduate</div>
                        </div>
                        <div className="ml-auto">
                          <div className="text-right text-red-600 font-medium">Still needed:</div>
                          <div className="text-right">
                            When you are close to finishing your degree requirements you will need to file to graduate
                            with the Office of the University Registrar.
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-medium">Passed/Not Passed Unit Check</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Major Requirements */}
                <Card className="mb-4">
                  <CardHeader className="py-4 px-6">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg font-medium">Computer Science Major Requirements</CardTitle>
                      <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">IN PROGRESS</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="lower-division">
                        <AccordionTrigger className="py-2">
                          <div className="flex items-center gap-2">
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">COMPLETE</Badge>
                            <span>Lower Division Requirements</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 pl-4">
                            <div className="flex justify-between py-1 border-b">
                              <div>ECS 20 - Discrete Mathematics</div>
                              <div className="text-green-600 font-medium">Completed - A</div>
                            </div>
                            <div className="flex justify-between py-1 border-b">
                              <div>ECS 36A - Programming &amp; Problem Solving</div>
                              <div className="text-green-600 font-medium">Completed - A-</div>
                            </div>
                            <div className="flex justify-between py-1 border-b">
                              <div>ECS 36B - Software Development</div>
                              <div className="text-green-600 font-medium">Completed - B+</div>
                            </div>
                            <div className="flex justify-between py-1 border-b">
                              <div>ECS 36C - Data Structures &amp; Algorithms</div>
                              <div className="text-green-600 font-medium">Completed - A</div>
                            </div>
                            <div className="flex justify-between py-1 border-b">
                              <div>ECS 50 - Computer Organization</div>
                              <div className="text-green-600 font-medium">Completed - B+</div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="upper-division">
                        <AccordionTrigger className="py-2">
                          <div className="flex items-center gap-2">
                            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">IN PROGRESS</Badge>
                            <span>Upper Division Requirements</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 pl-4">
                            <div className="flex justify-between py-1 border-b">
                              <div>ECS 120 - Theory of Computation</div>
                              <div className="text-green-600 font-medium">Completed - B</div>
                            </div>
                            <div className="flex justify-between py-1 border-b">
                              <div>ECS 122A - Algorithm Design and Analysis</div>
                              <div className="text-green-600 font-medium">Completed - B+</div>
                            </div>
                            <div className="flex justify-between py-1 border-b">
                              <div>ECS 132 - Probability &amp; Statistical Modeling</div>
                              <div className="text-blue-600 font-medium">In Progress</div>
                            </div>
                            <div className="flex justify-between py-1 border-b">
                              <div>ECS 140A - Programming Languages</div>
                              <div className="text-green-600 font-medium">Completed - A-</div>
                            </div>
                            <div className="flex justify-between py-1 border-b">
                              <div>ECS 150 - Operating Systems</div>
                              <div className="text-green-600 font-medium">Completed - B</div>
                            </div>
                            <div className="flex justify-between py-1 border-b">
                              <div>ECS 154A - Computer Architecture</div>
                              <div className="text-amber-600 font-medium">Planned - Spring 2025</div>
                            </div>
                            <div className="flex justify-between py-1 border-b">
                              <div>ECS 171 - Machine Learning</div>
                              <div className="text-blue-600 font-medium">Waitlisted</div>
                            </div>
                            <div className="flex justify-between py-1 border-b">
                              <div>ECS 188 - Ethics in an Age of Technology</div>
                              <div className="text-red-600 font-medium">Not Registered</div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="electives">
                        <AccordionTrigger className="py-2">
                          <div className="flex items-center gap-2">
                            <Badge className="bg-red-100 text-red-800 hover:bg-red-100">INCOMPLETE</Badge>
                            <span>Technical Electives</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 pl-4">
                            <div className="text-sm text-gray-600 mb-2">
                              Need 3 upper division ECS courses (12 units) from the approved list.
                            </div>
                            <div className="flex justify-between py-1 border-b">
                              <div>ECS 161 - Modern Programming Tools</div>
                              <div className="text-amber-600 font-medium">Planned - Spring 2025</div>
                            </div>
                            <div className="flex justify-between py-1 border-b">
                              <div>ECS 162 - Web Programming</div>
                              <div className="text-amber-600 font-medium">Planned - Spring 2025</div>
                            </div>
                            <div className="flex justify-between py-1 border-b">
                              <div>ECS 175 - Computer Graphics</div>
                              <div className="text-red-600 font-medium">Not Taken</div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>

                {/* Recommended Courses */}
                <Card className="mb-4">
                  <CardHeader className="py-4 px-6">
                    <CardTitle className="text-lg font-medium">Recommended Courses for Your Degree Progress</CardTitle>
                    <CardDescription>Based on your remaining requirements</CardDescription>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <div className="space-y-4">
                      <div className="border rounded-md p-4 bg-amber-50">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                          <div>
                            <div className="font-medium">Priority Courses to Register For</div>
                            <p className="text-sm text-gray-600 mt-1">
                              These courses are critical for your degree progress and should be prioritized.
                            </p>
                          </div>
                        </div>
                        <div className="mt-4 space-y-2">
                          <div className="flex justify-between items-center p-2 bg-white rounded border">
                            <div>
                              <div className="font-medium">ECS 188 - Ethics in an Age of Technology</div>
                              <div className="text-sm text-gray-600">Required for graduation - 4 units</div>
                            </div>
                            <Button className="bg-[#13639e] hover:bg-[#0e4c7a]">Add to Schedule</Button>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-white rounded border">
                            <div>
                              <div className="font-medium">ECS 154A - Computer Architecture</div>
                              <div className="text-sm text-gray-600">Required for major - 4 units</div>
                            </div>
                            <Button className="bg-[#13639e] hover:bg-[#0e4c7a]">Add to Schedule</Button>
                          </div>
                        </div>
                      </div>

                      <div className="border rounded-md p-4">
                        <div className="font-medium mb-2">General Education Requirements Remaining</div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-gray-50 rounded border">
                            <div>
                              <div>Arts &amp; Humanities (2 courses needed)</div>
                              <div className="text-sm text-gray-600">Suggested: AHI 001A, MUS 010</div>
                            </div>
                            <Button variant="outline">View Options</Button>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-gray-50 rounded border">
                            <div>
                              <div>Social Sciences (1 course needed)</div>
                              <div className="text-sm text-gray-600">Suggested: SOC 001, PSC 001</div>
                            </div>
                            <Button variant="outline">View Options</Button>
                          </div>
                        </div>
                      </div>

                      <div className="border rounded-md p-4">
                        <div className="font-medium mb-2">Technical Electives Suggestions</div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-gray-50 rounded border">
                            <div>
                              <div className="font-medium">ECS 175 - Computer Graphics</div>
                              <div className="text-sm text-gray-600">Offered: Spring 2025 - 4 units</div>
                            </div>
                            <Button variant="outline">View Details</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {activeTab === "schedule-builder" && (
          <div>
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
                      Please check your Pass 2 registration appointment. You may only register during your appointment
                      time.
                    </span>
                    <X className="h-4 w-4 cursor-pointer" />
                  </AlertDescription>
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
                </div>
              </div>

              {/* Sidebar */}
              <div className="md:w-1/4">
                <div className="bg-[#f2c75c] p-2 font-bold border border-[#e6b94c] mb-2">DEGREE PROGRESS IMPACT</div>
                <div className="bg-white border mb-4 p-4">
                  <div className="mb-4">
                    <div className="font-medium mb-2">Current Schedule Impact</div>
                    <Progress value={78} className="h-2 bg-gray-200" indicatorClassName="bg-[#28a745]" />
                    <div className="flex justify-between text-sm mt-1">
                      <span>Current: 69%</span>
                      <span className="text-green-600">With Schedule: 78%</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium">Requirements Addressed:</div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Major Upper Division (ECS 171, ECS 188)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <XCircle className="h-4 w-4 text-red-500" />
                      <span>General Education (Still needed)</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <Button className="w-full bg-[#13639e] hover:bg-[#0e4c7a]">View Degree Impact Details</Button>
                  </div>
                </div>

                <div className="bg-[#f2c75c] p-2 font-bold border border-[#e6b94c] mb-2">SUGGESTED COURSES</div>
                <div className="bg-white border mb-4">
                  <div className="p-2 border-b bg-[#f8f9fa]">Based on Degree Requirements:</div>
                  <div className="p-2 border-b hover:bg-gray-50 cursor-pointer">
                    <div>AHI 001A - Art History</div>
                    <div className="text-xs text-gray-600">Fulfills Arts &amp; Humanities GE</div>
                  </div>
                  <div className="p-2 border-b hover:bg-gray-50 cursor-pointer">
                    <div>SOC 001 - Introduction to Sociology</div>
                    <div className="text-xs text-gray-600">Fulfills Social Sciences GE</div>
                  </div>
                  <div className="p-2 hover:bg-gray-50 cursor-pointer">
                    <div>ECS 175 - Computer Graphics</div>
                    <div className="text-xs text-gray-600">Fulfills Technical Elective</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Feedback Button */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2">
        <button className="bg-[#13639e] text-white py-2 px-4 rotate-90 transform origin-right">Feedback</button>
      </div>
      <CourseAdvisorChat />
    </div>
  )
}

