My resume, built it React: https://luminaire-dev.github.io/resume/

Markdown version:

# Leila Elkhalidy
###### Sr. Software Engineer • Kelowna, BC • leila.elkhalidy@gmail.com

Hi there, I'm Leila. 👋

I’m driven by the challenge of solving meaningful problems through code and technology. With over a decade of experience at three major fintech and banking companies (Synctera, KOHO, and ATB Financial), I've developed deep expertise building and scaling reliable solutions in the financial space.

In my latest position at Synctera, I designed and developed backend systems using Golang across the risk, compliance, and lending domains. I worked on various core products including Customer Risk Rating (CRR), Credit Dispute Processing, KYC/KYB and Synctera's case management systems.

## Tech Stack 🥞
Golang, PostgreSQL, JavaScript(ES6) (React, Redux, Bable, Webpack, Node, Express), Java, C#, Docker, Git, GitHub, Gitlab, GCP, Terraform, Grafana, DataDog, AWS, RabbitMQ, Cordova/Ionic, Jenkins, Bitbucket, Bitrise, Auth0, JSON, XML, CSS, REST.
## Dev Practices 👩🏻‍💻
CI/CD, Feature Toggling, Event-Driven Architecture(Pub/Sub), Outbox Pattern, Integration Testing, Unit Testing, Test Automation, Test Driven Development, Database Normalization, Indexing, Locking, Idempotency, Paired Programming, Code Reviews, 
Observability, Agile, Scrum, Kanban, Documentation, Request for Comments(RFC). 
## Experience 👔

### Sr. Software Engineer - Synctera | 2024 - present
Synctera is a Banking-as-a-Service (BaaS) platform that connects fintechs with banks, offering APIs to launch and scale financial products with built-in compliance monitoring, KYC, and fraud detection.

#####  Credit Dispute Workflow Automation (May 2025 - Aug 2023)

* Designed and implemented an automated credit dispute workflow using Golang, PostgreSQL, and GCP Pub/Sub, replacing a previously manual process.
* Built functionality to ingest credit dispute batch files from a B2B credit partner, over SFTP, using a Google Cloud Storage (GCS) event listener.
* Built logic to parse and process credit dispute data from batch files, storing credit dispute resources within our system.
* Automated event-driven case creation within the Synctera platform for each credit dispute resources.
* Wrotes e2e and integration tests, and created alerting reports in Metabase to monitor system health post-launch and prevent regressions.
* Worked closely with frontend developers to ensure the backend effectively serves frontend vision.

#####  Customer Risk Rating (CRR) Enhancements (Feb 2025 - May 2023) 

* Developed CRUD-style, Restful, API that enable banks to configure their own risk score calculation settings and fine-tune parameter weights and thresholds to suit their specific risk program and strategy.
* Refactored legacy CRR code and introduced parallel processing of risk score calculations, using Go worker pools and goroutines, improving efficiency and performance.
* Implemented background job orchestration using an in-house async, task processing service, automating the recalculation of all risk scores under a tenants upon config change.
* Wrote end-to-end and integration test to prevent regressions.
* Collaborated closely with frontend engineers to ensure seamless integration across BE services and UI.
      

### Sr. Backend Engineer - KOHO Financial | 2021 - 2023
KOHO is a Canadian fintech company that offers a Visa Card + mobile banking app with modern features like credit building and helpful budgeting tools.

##### Secured Credit Building (Jan 2023 - Aug 2023) 
* Developed a new microservice using Golang and DynamoDB to manage collection of fee and payments from the users.
* Designed and developed REST endpoints using Golang and PostgreSQL to manage user's subscription and fetch user's credit score from Equifax.
* Introduced event-driven patterns with RabbitMQ to replace legacy code orchestrating HTTPS calls to other services.
* Implemented a backend process to conduct experiments on varying price points using LaunchDarkly control/variant groups, and measuring user adoption rates in Metabase.
* Wrote unit and integration tests.
* Provided on-call support for the feature and improved operational support processes.
* Worked closely with other developers, frequently pairing, mentoring, and performing code reviews.

##### KYC and Fraud Detection (2022 - 2023)  
* Designed and developed a new microservice using Golang, PostgreSQL, Docker, AWS, and Jenkins to handle KYC and fraud detection checks on user registration.
* Built integrations with various KYC and fraud detection tools including KOHO's machine learning model, Threatmetrix, Comply Advantage, Trulioo and Onfido.
* Decommissioned legacy monolith code, re-routing traffic to new microservice, using event driven patterns.
* Wrote documentation outlining the KYC and fraud check workflows.
* Provided on-call support for KYC and Fraud detection features and contributed to operational support documentation.
* Wrote unit and integration tests.
*Worked closely with other developers, frequently pairing, mentoring, and performing code reviews.

##### Fund Loading With Stripe (2022) 
* Built new integration with Stripe, to allow users to load funds using other debit or credit cards.
* Wrote documentation for the workflows.
* Wrote unit and integration tests.

##### Localization of backend content (2021 - 2022)
* Worked on a new backend Localization service that checks the user's language preference and feed french or english content accordingly.
* Added Golang struct tags to all backend areas feeding content to the front end, so that they can be registered by the new service.
* Wrote documentation for the new localization service.
* Wrote unit and integration tests.

### Full-Stack Developer - ATB Financial | 2013 - 2021
ATB Financial is a bank that provides financial services to over 800,000 Albertan residents and businesses.
##### Business Banking Mobile (2018 - 2021) 
* Converted ATB’s Business Online platform into an iOS and Android app using Cordova.
* Created the Solution Design and Development Roadmap.
* Built new biometric login and 2FA authentication using JWT, Auth0 and Cordova plugins.
* Built in-app cheque deposits, using cordova plugins to leveraging device camera.
* Developed responsive, accessible, and reusable React components for mobile.
* Developed RESTful APIs using Express and microservices architecture.
* Built unit tests in Jest and React Testing Library.
* Constructed mobile end-to-end tests using Selenium and Experitest.
* Configured CI/CD pipelines in GitLab and BitRise.
* Provided on-call support and particapted in outage resolution and deployments.
* Worked closely with other developers, frequently pairing, mentoring, and performing code reviews.
##### Online Banking (2017 - 2018) 
* Developed a new online banking platform using React, Redux, Babel, Webpack, Express, and Node.js.
* Developed responsive, accessible, and reusable React components, following atomic design principles.
* Implemented the e-transfer feature's front-end components and backend endpoints integrating with Interac
* Developed RESTful APIs using Express and microservices architecture.
* Built unit tests in Jest and React Testing Library.
* Constructed mobile end-to-end tests using Selenium.
* Provided on-call support and particapted in outage resolution and deployments.

##### Retail Banking Mobile (2016 - 2017) 
* Developed a new ATB mobile banking app using HTML5 and Cordova.
* Implemented account summary and bill payment UIs using HTML5, CSS, Bootstrap and SAP Mobile Platform.
* Built backend endpoints using Soap and XML.
* Used Jenkins to automate builds and deployments.
* Provided on-call support and particapted in outage resolution and deployments.

##### ATB Flexible Pension Plan (2015 - 2016)
* Developed an internal .NET app to allow ATB team members to update or make changes to their pension.
* Tech Used: C#, ASP.NET, SQL Server, SOAP, SVN, NUnit.

##### ATB Customer Service Application - Jr. Developer (2013 - 2015)
* Developed features in Java Swing and provided operational support for an internal desktop app used by customer service team members in ATB branches.

## Education 👩🏻‍🎓
#### Northern Alberta Institute of Technology (NAIT) | 2011 - 2013
##### Digital Media and IT (DMIT) Diploma, Edmonton, Alberta | 3.9 GPA

Capstone: Modernized Alberta Health Services’ (AHS) legacy back-end to n-tier application.

## Community 🌳
Building community, beyond my regular day-to-day responsibilities, has always been important and meaningful to me. Here are some of the ways I've been involved and acknowledged for my participation in different communities:

#### Women Who Go Toronto, 2022 - Present
I've been involved in this community of women and non-binary Go developers; organizing book clubs, coding challenges, and talks on various Go topics.

#### deCODE Hackathon Fall, 2021
Volunteered as a mentor, representing KOHO at this student hackathon where we built an expense splitting feature.

#### ATB Eng Culture Excellence Award Winner, 2021
Awarded to ATB team members who have gone above and beyond to exemplify ATB’s Engineering Culture.

#### ATB Hackday - Fan Favorite Winner, 2019
Participated in this 2 day hackathon where we developed a plugin that standardizes APIs creation at ATB, speeding up dev time and improving code quality and logging.

#### Google Cloud Relay, 2018
Participated in this 6 hours coding relay challenge, where my team and I developed a Google Cloud hosted React app that provides a localized ski condition forecast.

#### HackEDbeta at Startup Edmonton, 2017
Volunteered as a Mentor at this beginner-friendly hackathon.
