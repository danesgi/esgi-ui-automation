import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
// import ReportsPage from '../../pageobjects/ReportsPage'
import Global from '../../support/Global'
import {Users, Reports} from '../../fixtures/data'

describe('DistrictAdmin - Reports', function () {
    before(function () {
        LoginPage.navigate()
    })
    after(function () {
        Global.logout()
    })
    it('should be on login page', function () {
        expect(LoginPage.title).toBe(LoginPage.getTitle())
    })
    describe('LogIn', function () {
        before(function () {
            LoginPage.login(Users.districtadmin.credentials)
        })
        it('should be logged in', function () {
            expect(HomePage.title).toBe(HomePage.getTitle())
        })
        describe('Reports', function () {
            describe('Types', function () {
                let reports
                const districtAdminReports = Reports.districtadmin
                before(function () {
                    reports = HomePage.getReports()
                })
                it('should show reports', function () {
                    expect(reports).toStrictEqual(districtAdminReports.initial)
                })
                describe('OpenCloseReports', function () {
                    describe('School', function () {
                        let reports
                        before(function () {
                            HomePage.clickSchool('COLUMBUS ELEMENTARY')
                            reports = HomePage.getReports()
                        })
                        it('should show correct reports', function () {
                            expect(reports).toStrictEqual(districtAdminReports.school)
                        })
                        describe('teacher', function () {
                            let reports
                            before(function () {
                                HomePage.clickTeacher('Anahit Arutyunyan')
                                reports = HomePage.getReports()
                            })
                            it('should show correct reports', function () {
                                expect(reports).toStrictEqual(districtAdminReports.teacher)
                            })
                            describe('Class', function () {
                                let reports
                                before(function () {
                                    HomePage.clickClass('Arutyunyan\'s Class')
                                    reports = HomePage.getReports()
                                })
                                it('should show correct reports', function () {
                                    expect(reports).toStrictEqual(districtAdminReports.classs)
                                })
                            })
                        })
                    //     let reportTitle
                    //     schoolAdminReports.teacher.obj.forEach(report => {
                    //         describe(report.name, function () {
                    //             before(function () {
                    //                 reportTitle = ReportsPage.getReportTitle(report.name)
                    //             })
                    //             it('should be correct', function () {
                    //                 expect(reportTitle).toBe(report.title)
                    //             })
                    //             it('should still show correct reports', function () {
                    //                 expect(HomePage.getReports()).toStrictEqual(schoolAdminReports.teacher.types)
                    //             })
                    //         })
                    //     })
                    //     describe('Class Grades', function () {
                    //         before(function () {
                    //             reportTitle = ReportsPage.getReportTitle('Class Grades')
                    //         })
                    //         it('should be correct', function () {
                    //             expect(reportTitle).toBe('Setup Grading Scales')
                    //         })
                    //     })
                    //     describe('Bingo', function () {
                    //         before(function () {
                    //             ReportsPage.openReport('Bingo')
                    //         })
                    //         after(function () {
                    //             browser.click('.close-popup')
                    //         })
                    //         it('should be opened', function () {
                    //             expect(browser.isVisible('.bingo.preview')).toBe(true)
                    //         })
                    //     })
                    // })
                    // describe('AllTeachers', function () {
                    //     let reports
                    //     before(function () {
                    //         HomePage.clickAllTeachers() // Click to show All Teachers reports
                    //         reports = HomePage.getReports()
                    //     })
                    //     it('should show reports', function () {
                    //         expect(reports).toStrictEqual(schoolAdminReports.allteachers.types)
                    //     })
                    //     let reportTitle
                    //     schoolAdminReports.allteachers.objs.forEach(report => {
                    //         describe(report.name, function () {
                    //             before(function () {
                    //                 reportTitle = ReportsPage.getReportTitle(report.name)
                    //             })
                    //             it('should be correct', function () {
                    //                 expect(reportTitle).toBe(report.title)
                    //             })
                    //         })
                    //     })
                    })
                })
            })
        })
    })
})
