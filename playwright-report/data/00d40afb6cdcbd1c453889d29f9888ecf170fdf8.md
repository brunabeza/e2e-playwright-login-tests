# Test info

- Name: deve fazer login e acessar formulário de cadastro de funcionário
- Location: C:\Users\bruna\e2eTests\tests\login.spec.js:6:1

# Error details

```
Error: expect.toHaveText: Error: strict mode violation: locator('h6') resolved to 2 elements:
    1) <h6 data-v-7b563373="" data-v-c286b6e5="" class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module">PIM</h6> aka getByRole('heading', { name: 'PIM' })
    2) <h6 data-v-7b563373="" data-v-304890b0="" class="oxd-text oxd-text--h6 orangehrm-main-title">Add Employee</h6> aka getByRole('heading', { name: 'Add Employee' })

Call log:
  - expect.toHaveText with timeout 5000ms
  - waiting for locator('h6')

    at FormPage.assertOnFormPage (C:\Users\bruna\e2eTests\pages\FormPage.js:11:41)
    at C:\Users\bruna\e2eTests\tests\login.spec.js:21:18
```

# Page snapshot

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "PIM" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: manda user
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: Configuration 
      - listitem:
        - link "Employee List":
          - /url: "#"
      - listitem:
        - link "Add Employee":
          - /url: "#"
      - listitem:
        - link "Reports":
          - /url: "#"
      - button ""
- heading "Add Employee" [level=6]
- separator
- button "Choose File"
- img "profile picture"
- button ""
- paragraph: "Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px"
- text: Employee Full Name*
- textbox "First Name"
- textbox "Middle Name"
- textbox "Last Name"
- text: Employee Id
- textbox: "0388"
- separator
- paragraph: Create Login Details
- checkbox
- separator
- paragraph: "* Required"
- button "Cancel"
- button "Save"
- paragraph: OrangeHRM OS 5.7
- paragraph:
  - text: © 2005 - 2025
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
   1 | // pages/FormPage.js
   2 | const { expect } = require('@playwright/test');
   3 |
   4 | class FormPage {
   5 |   constructor(page) {
   6 |     this.page = page;
   7 |     this.addEmployeeTitle = page.locator('h6'); // Título da página "Add Employee"
   8 |   }
   9 |
  10 |   async assertOnFormPage() {
> 11 |     await expect(this.addEmployeeTitle).toHaveText('Add Employee');
     |                                         ^ Error: expect.toHaveText: Error: strict mode violation: locator('h6') resolved to 2 elements:
  12 |   }
  13 | }
  14 |
  15 | module.exports = { FormPage };
  16 |
```