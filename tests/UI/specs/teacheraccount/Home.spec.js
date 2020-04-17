import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import Global from '../../support/Global'
import {Users} from '../../fixtures/data'

describe('HomePage', function () {
    before(function () {
        LoginPage.navigate()
    })
    after(function () {
        Global.logout()
    })
    it('should be on login page', function () {
        expect(LoginPage.title).to.equal(LoginPage.getTitle())
    })
    describe('LogIn', function () {
        before(function () {
            LoginPage.login(Users.teacher.credentials)
        })
        it('should be logged in', function () {
            expect(HomePage.title).to.equal(HomePage.getTitle())
        })
        describe.skip('TopMenus', function () {
            describe('StudentExplorer', function () {
                before(function () {
                    Global.navigateToStudentExplorer()
                })
                it('should be able to navigate', function () {
                    expect('Student Exploer').to.equal(browser.getTitle())
                })
            })
            describe('ParentConferencer', function () {
                before(function () {
                    Global.navigateToParentConferencer()
                })
                it('should be able to navigate', function () {
                    expect('Parent Conferencer').to.equal(browser.getTitle())
                })
            })
            describe('Test Explorer', function () {
                before(function () {
                    Global.navigateToTestExplorer()
                })
                it('should be able to navigate', function () {
                    expect('Test Explorer').to.equal(browser.getTitle())
                })
            })
            describe('Home', function () {
                before(function () {
                    Global.navigateToHome()
                })
                it('should be able to navigate', function () {
                    expect(HomePage.title).to.equal(HomePage.getTitle())
                })
            })
        })
        describe.skip('LeftMenu', function () {
            describe('Default', function () {
                it('should be expanded', function () {
                    expect(HomePage.isLeftMenuExpanded()).to.equal(true)
                })
            })
            describe('Collaspe', function () {
                before(function () {
                    HomePage.collapseLeftMenu()
                })
                it('should be collasped', function () {
                    expect(HomePage.isLeftMenuExpanded()).to.equal(false)
                })
            })
            describe('Expand', function () {
                before(function () {
                    HomePage.expandLeftMenu()
                })
                it('should be expanded', function () {
                    expect(HomePage.isLeftMenuExpanded()).to.equal(true)
                })
            })
        })
        describe('AllClasses', function () {
            let allClassesObj
            before(function () {
                allClassesObj = HomePage.getAllClassesObj()
            })
            it('should be present', function () {
                expect(allClassesObj.component.isDisplayed()).to.equal(true)
            })
            describe('Controls', function () {
                describe('Title', function () {
                    let title
                    before(function () {
                        title = allClassesObj.title
                    })
                    it('should show the correct text', function () {
                        expect(title.getText()).to.equal('All Classes (4)')
                    })
                    it('should be visible', function () {
                        expect(title.isDisplayed()).to.equal(true)
                    })
                    it('should be enabled', function () {
                        expect(title.isEnabled()).to.equal(true)
                    })
                })
                describe('AddButton', function () {
                    let add
                    before(function () {
                        add = allClassesObj.add
                    })
                    it('should be visible', function () {
                        expect(add.isDisplayed()).to.equal(true)
                    })
                    it('should be enabled', function () {
                        expect(add.isEnabled()).to.equal(true)
                    })
                })
                describe('ExpandCollaspeButton', function () {
                    let expandCollaspe
                    before(function () {
                        expandCollaspe = allClassesObj.expandcollapse
                    })
                    it('should be visible', function () {
                        expect(expandCollaspe.isDisplayed()).to.equal(true)
                    })
                    it('should be enabled', function () {
                        expect(expandCollaspe.isEnabled()).to.equal(true)
                    })
                })
            })
            describe('AddClass', function () {
                before(function () {
                    let payload = {
                        name: 'Testing123',
                        students: ['Ella Ayvazian', 'Emily Charkhchyan']
                    }
                    HomePage.addClass(payload)
                })

                it('should add a class', function () {
                    browser.pause(1000)
                })
            })
            describe('EditClass', function () {
                before(function () {
                    let payload = {
                        name: 'Testing123',
                        newname: 'NewClass123',
                        students: ['Emily Charkhchyan']
                    }
                    HomePage.editClass(payload)
                })

                it('should edit a class', function () {
                    browser.pause(1000)
                })
            })
            describe('DeleteClass', function () {
                before(function () {
                    let className = 'NewClass123'
                    HomePage.deleteClass(className)
                })
                it('should delete a class', function () {
                    browser.pause(1000)
                })
            })
        })
        describe.only('AllGroups', function () {
            // First select what class you want to work with to show the All Groups component
            before(function () {
                // Pick a class
            })
            describe('AddGroup', function () {
                let payload
                before(function () {
                    payload = {
                        classname: 'Buckhoff\'s Class',
                        name: 'Group123',
                        students: ['Sofia Boghozian', 'Janet Dermenjyan']
                    }
                    HomePage.addGroup(payload)
                })
                it('should add a group', function () {
                    expect(HomePage.isGroupPresent(payload.name)).to.equal(true)
                })
            })
            describe('EditGroup', function () {
                let payload
                before(function () {
                    payload = {
                        classname: 'Buckhoff\'s Class',
                        name: 'Group123',
                        newname: 'NewGroup123',
                        students: ['Sofia Boghozian']
                    }
                    HomePage.editGroup(payload)
                })
                it('should edit a group', function () {
                    expect(HomePage.isGroupPresent(payload.newname)).to.equal(true)
                })
            })
            describe('DeleteGroup', function () {
                let payload = {
                    classname: 'Buckhoff\'s Class',
                    groupname: 'NewGroup123'
                }
                before(function () {
                    HomePage.deleteGroup(payload)
                })
                it('should delete a group', function () {
                    expect(HomePage.isGroupPresent(payload.groupname)).to.equal(false)
                })
            })
        })
        describe('AllStudents', function () {
            describe('AddStudent', function () {
                before(function () {
                    let payload = {
                        firstname: '00first123',
                        lastname: '00last123'
                    }
                    HomePage.addStudent(payload)
                })
                it('should add a student', function () {
                    browser.pause(1000)
                })
            })
            describe('EditStudent', function () {
                before(function () {
                    let payload = {
                        name: '00first123 00last123',
                        firstname: '00NewFirst',
                        lastname: '00Newlast'
                    }
                    HomePage.editStudent(payload)
                })
                it('should edit a student', function () {
                    browser.pause(1000)
                })
            })
            describe('DeleteStudent', function () {
                before(function () {
                    let studentName = '00NewFirst 00Newlast'
                    HomePage.deleteStudent(studentName)
                })
                it('should delete a student', function () {
                    browser.pause(1000)
                })
            })
        })
    })
})
