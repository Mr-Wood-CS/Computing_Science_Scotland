# Analysis

For Advanced Higher you are required to be able to explain and use:

* Functional Requirements
* Feasibility Studies 
* User Surveys
* Project Planning
* Requirement Specifications
* Unified Modelling Language (UML)

## ^^Functional Requirements^^

!!! info

	Functional requirements are defined in terms of the inputs, processes, and outputs of  a program.
	Nothing has changed from higher.


## ^^Feasability Studies^^

!!! info "What you Need to Know"

	Describe, exemplify, and implement research for:
 
	* feasibility studies:
		* economic
		* time
		* legal
		* technical
	
	* user surveys

### ==Explanation==

The feasibility study must look at the project in sufficient depth to be able to provide information that:

* either shows that the development of the new system is cost-effective,
	
* or shows why the project should not continue.
  

The feasibility study should be conducted relatively cheaply and within a fairly short time frame. 

There are no legal or contractual requirements at this stage.

The findings of the feasibility study are presented to the client in the form of a report.

This report indicates costs, benefits, alternatives and appropriate recommendations.

### ==The Four Aspects of a Feasibility Study==

There are four aspects of feasibility that must be considered in any feasibility study:

=== "Economic Feasability"

    The client will want to know the cost of each option and what they get for their money.

    A system is only economically feasible if the benefits of the development outweigh the costs. For this reason a cost benefit analysis is carried out.

    The cost-benefit analysis will identify:

    * the costs involved in the developmen
    * the benefits that will result from the development
    * the break-even point when the new system stops costing money and starts making money

=== "Legal Feasability"

    This considers the legal issues associated with the development of a new information system. Particular notice must be given to the legislation outlined in:

    GDPR

    * Will the new system contain details of living persons?

    Computer Misuse Act (1990)

    * The potential for hacking and plating viruses must be considered.

    Copyright, Design and Patents Act (1988)

    * The issue of software licensing is important.

=== "Technical Feasability"

    The technical feasibility study must identify the technologies that will be necessary for the proposed system to function correctly. 

    Once identified, the technical feasibility then considers whether or not the technologies necessary are currently available.

    * If the required technologies are available, the technical feasibility must determine whether or not the client already has the necessary resources. If not, the resources that must be acquired are identified and suitable hardware and software recommended.

=== "Time Feasability"

    The time necessary to develop a new information system is considerable. For this reason, the time feasibility must consider not only the time needed to carry out the development but how this will affect the client.

    Time feasibility must take account of:
    
    * overall development time for the project
    * events during the year that the business is already committed to
    * when best to install the new system
    * when is the best time to train users how to use the new system
    * when will the  system be ready for use.

### ==User Survey==

The users of a particular program are the best people to identify the existing problems with the software and how it could be improved.

If the software being developed is new, the target user group should understand the programme. 

> For example, a new library system would be developed following some time spent capturing the experience of existing librarians and how they operate.

When the opinion of a number of users is required, it is often easier to create a survey or questionnaire which will capture the information that the project team require.

## ^^Project Planning^^

!!! info "What you Need to Know"

	Describe, exemplify, and implement planning in terms of:
	
	* Scheduling
	* Resources
	* Gantt charts

### ==Explanation==

Project planning involves dividing the project into smaller tasks that are allocated to teams. 

The project leader must use the available resources in the best possible way to get the job completed successfully and on time. 

Project management software will organise the project into smaller tasks and then schedule these tasks. The schedule can be displayed as a Gantt Chart.

As the project progresses and jobs are completed or delayed, the charts can be updated to show the current position.

In this way, the progress of a project can be monitored regularly.

A project plan must show:

* the individual tasks that must be carried out
* the time required for each task
* the sequencing of the tasks to be carried out
* the resources needed for each task
* the costs involved in carrying out each task

### ==Scheduling==

The role of project manager is to use his/her skills to turn the project requirements specification into a work breakdown structure and then to estimate the amount of effort required to complete each task.

These tasks can then be allocated as items of work to be completed by individuals and/or teams. 

A work breakdown structure represents the hierarchy of tasks to be completed and the milestones within the project. 

A milestone is a specific point in the project timeline which has some level of importance. It will be a point at which the project progress is evaluated and reported to the client. 

It can also be a point where the client will be given a deliverable; where the client will receive some of the output from the project work.
 
When the tasks within the milestone are completed then the milestone is achieved.

### ==Resources==

Projects require resources in order to be completed. 

A significant amount of the resource required to complete a project will be the members of the project team. 

There will also be other resources that may be required to complete the project: specialist hardware/software, external consultants/designers, legal and other professionals.

### ==Gantt Charts==

A Gantt chart is a way of showing the work breakdown schedule against a timeline.

The timeline is used to show:

* when the activity to complete tasks begins and ends,
* how long each activity is scheduled to last,
* where activities overlap with each other and
* the start and end dates for the whole project.

> Gantt charts can also be used to show the dependencies between tasks on the timeline.

## ^^Requirement Specification^^

### ==Explanation==

All the information acquired up to this point is contained within the Requirement Specification which is produced for the client.

The requirements specification contains:

* Functional Requirements
* End-User Requirements
* Scope, Boundaries & Constraints

Producing the requirement spec is an iterative process between the client and the consultants as both sides must agree on what is to be produced.

It is a legal binding document and protects both parties:

* The client knows what they are paying for and the consultants must deliver this.
* The consultants know what they have to develop and stops the client from changing their minds

The requirements specification is used for validation throughout the process.

* The consultants use it to make sure that what they are producing is correct.
* The client use it at beta testing to ensure that what they have is what they asked for.

### ==Requirement Specification Breakdown==

=== "Functional Requirements"

    The functional requirements (inputs, processes and outputs) should be written in such a way that the end-user can understand them clearly and unambiguously, but also so that the programmers know what they have to produce.

=== "Scope"

    The scope is a list of the deliverables that the project will and over to the client and/or end-user.

    E.g. design, completed program, test plan, test results and evaluation report.

    This hasn’t changed from higher

=== "Boundaries"

    The boundaries are the limits that help to define what is in the project and what is not.  It can also clarify any assumptions made by the software developers regarding the clients requirements.

    This hasn’t changed from higher.


=== "Constraints"

    Technical constraints

    * knowledge and/or availability of development tools and programming language
    * the operating system or platforms that will be used to deliver the working solution
    * hardware considerations such as capacity
    * non-functional requirements such as performance considerations

    Business constraints:

    * schedule and timescales that must be met
    * available budget
    * composition and makeup of the development team
    * software licensing restrictions or requirements

    Further constraints:

    * economic considerations
    * political issues

### ==Worked Example==

The purpose of a program is to allow the end user to search for an item on an unsorted list of data. 

If a match is found, the program will display the row of data (item id, price and number in stock) for the item.

=== "Functional Requirements"

    **Inputs**
    
    * itemID
    * price
    * quantity in stock
    
    **Processes**
    
    * read in data from an external file to a 2D array
    * sort the data in order of itemID from low to high
    * search the 2D array for the required itemID, based on the end-user input

    **Output**
    
    * if a match is found, the data (itemID, price, and number in stock) will correspond to the end-user input
    * if no match is found, a suitable message will inform the end user

    == There is the assumption that the data is being input from an external file, this is why it the price and quantity are part of input.==
    
    == There is slso an assumption that a binary search is being used which is why the data is sorted first.==

=== "Scope"

    This development involves creating a modular program. The deliverables include:

    * a detailed design of the program structure
    * a test plan with a completed test data table
    * a working program
    * the results of testing
    * an evaluation report

=== "Boundaries"

    The boundaries of the program are:
    
    * the program will read the data (itemID, price, and number in stock) from a sequential file
    * the data is accurate, there is no need to implement input validation

=== "End User Requirements"

    End users will expect:
    
    * to enter an itemID while the program is running
    * the data corresponding to the itemID to be displayed
    * a user interface that is clearly labelled and easy to use for all user types

=== "Constraints"

    The constraints that apply to this development are:
    
    * Python or Visual Basic must be used to develop the program.
    * The working program will run on the Windows operating system.
    * The work must be completed within 8 hours.
