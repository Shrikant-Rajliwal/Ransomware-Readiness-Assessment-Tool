const  moreQuestions = [
    {
        section:"Data Backup",
        question: "Does your organization restrict the use of privileged accounts?",
        options: [
            {text:"Yes, our organization restricts the use of privileged accounts to only authorized personnel and for approved purposes." ,weightage:30,optNum:"option1"},
            {text: "Our organization does not have any formal restrictions on the use of privileged accounts.",weightage:0,optNum:"option2"},
            {text:"Our organization has some restrictions in place for privileged accounts, but they are not consistently enforced." ,weightage:20,optNum:"option3"},
            {text: "Our organization is not aware of the use of privileged accounts within our environment." ,weightage:10,optNum:"option4"}
           
        ],
    },
    {   
        section:"Data Backup",
        question: "Does your organization utilize hardened Standard Operating Environment or Gold Disks and are these reviewed and updated on a regular basis?",
        options: [

            {text:"Yes, our organization utilizes hardened Standard Operating Environment or Gold Disks, and they are reviewed and updated on a regular basis." ,weightage:30,optNum:"option1"},
            {text:"The organization does not utilize hardened Standard Operating Environment or Gold Disks.",weightage:0,optNum:"option2"},
            {text:"Our organization utilizes hardened Standard Operating Environment or Gold Disks, but they are not consistently reviewed and updated.",weightage:20,optNum:"option3"},
            {text:"Our organization is not aware of the use of hardened Standard Operating Environment or Gold Disks",weightage:10,optNum:"option4"}
        ]
    },
    {
        section:"Inventory Measures",
        question: "Have you established a process for reporting security incidents, including ransomware attacks, to the CSIRT?",
        options: [
            {text:"Our organization has a well-defined process for reporting security incidents, including ransomware attacks, to the CSIRT.",weightage:30,optNum:"option1"},
            {text:"Our organization does not have a process for reporting security incidents, including ransomware attacks.",weightage:0,optNum:"option2"},
            {text:"Our organization has nascent process for reporting security incidents, but it is not well-defined or consistently followed.",weightage:20,optNum:"option3"},
            {text:"Unaware of processess but solely relies on individual employees to report security incidents as they see fit.",weightage:10,optNum:"option4"}
        ],
    },
    {
        section:"Inventory Measures",
        question: "Have you established a process for communicating with relevant stakeholders, including employees, customers, and law enforcement, in the event of a ransomware attack?",
        options: [
            {text:"Yes, our organization has a well-defined process for communicating with relevant stakeholders in the event of a ransomware attack." ,weightage:30,optNum:"option1"},
            {text: "No, our organization does not have a process for communicating with relevant stakeholders in the event of a ransomware attack",weightage:0,optNum:"option2"},
            {text:"Yes, our organization has a process for communicating with relevant stakeholders, but it is not well-defined." ,weightage:20,optNum:"option3"},
            {text: "Unsure if our organization has a process for communicating with relevant stakeholders in the event of a ransomware attack." ,weightage:10,optNum:"option4"}
        ],
    },
    {
        section:"Cyber Security",
        question: "Have all of the locations of storage for your storage for your organization's critical information/data have been identified?",
        options: [
            {text:"All locations of storage for critical information /data have been identified" ,weightage:30,optNum:"option1"},
            {text:"No, not all locations have been identified" ,weightage:0,optNum:"option2"},
            {text: "Some of the locations have been identified, but not all ",weightage:20,optNum:"option3"},
            {text: "The organisation is unknown or unsure of all locations identified" ,weightage:10,optNum:"option4"}
           
        ],
    },



    {
        section:"Cyber Security",
        question: "Does the TableTop Exercises are conducted. If done, provide the period  of action , in what manner?",
        options: [
            {text:"The TableTop Exercise are conducted as an impact of report on incident ,monthly" ,weightage:30,optNum:"option1"},
            {text:"The TableTop Exercise are not conducted" ,weightage:0,optNum:"option2"},
            {text: "The TableTop Exercise are conducted on quarterly ",weightage:20,optNum:"option3"},
            {text: "The TableTop Exercise may be conducted , as of outsourced" ,weightage:10,optNum:"option4"}
           
        ],
    },



    {
        section:"Data Protection",
        question: "Does your organization have a process for regularly testing and updating incident response plans?",
        options: [
            {text:"Yes, our organization has a process for regularly testing and updating incident response plans." ,weightage:30,optNum:"option1"},
            {text: "No, we do not have a process for testing and updating incident response plans,given to outsourced.",weightage:0,optNum:"option2"},
            {text:"We have a process for testing and updating incident response plans, but it is not done regularly." ,weightage:20,optNum:"option3"},
            {text: "Unsure if we have a process for regularly testing and updating incident response plans." ,weightage:10,optNum:"option4"}
           
        ],
    },



    {   
        section:"Data Protection",
        question: "Have you established a process for regularly reviewing and updating security operations center (SOC) procedures to ensure they can effectively respond to ransomware attacks?",
        options: [
            {text:"Yes, our organization has established a process for regularly reviewing and updating SOC procedures to ensure they can effectively respond to ransomware attacks." ,weightage:30,optNum:"option1"},
            {text: "Our organization does not have a process for reviewing and updating SOC procedures as it is external SOC responds to our behalf our organization",weightage:20,optNum:"option2"},
            {text:"Our organization has a process for reviewing SOC procedures, but it is not regularly performed or documented." ,weightage:15,optNum:"option3"},
            {text: "Our organization is unaware of the need for a process to review and update SOC procedures for ransomware attacks." ,weightage:10,optNum:"option4"}
           
        ],
    },


    {
        section:"Salary Pay",
        question: "Does your organization provide remote access via Remote Desktop (RDP)?",
        options: [
            {text:"Yes, our organization provides remote access via Remote Desktop (RDP) using a secure connection with multi-factor authentication and strong password policies." ,weightage:30,optNum:"option1"},
            {text: "Our organization does not provide remote access via Remote Desktop (RDP)." ,weightage:0,optNum:"option2"},
            {text:"Our organization provides remote access via Remote Desktop (RDP) using a secure connection, but multi-factor authentication and strong password policies are not enforced.." ,weightage:20,optNum:"option3"},
            {text: "Our organization provides remote access via Remote Desktop (RDP) using an unsecured connection without multi-factor authentication or strong password policies.",weightage:10,optNum:"option4"}
           
        ],
    },


    
    {
        section:"Salary Pay",
        question: "Does your organization have a disaster recovery plan in place that includes procedures for responding to a ransomware attack?",
        options: [
            {text:"Our organization has a comprehensive disaster recovery plan that includes procedures for responding to a ransomware attack, and it is regularly tested and updated." ,weightage:30,optNum:"option1"},
            {text:"External Disaster Recovery Team(DRT) has taken as vendoring of our organization" ,weightage:25,optNum:"option2"},
            {text:"Our organization has a disaster recovery plan that includes procedures for responding to a ransomware attack, but it is not regularly tested or updated." ,weightage:15,optNum:"option3"},
            {text:"Our organization has a disaster recovery plan, but it does not specifically include procedures for responding to a ransomware attack..",weightage:10,optNum:"option4"},
           
        ],
    },









    




    





    





    











    // Add more questions as needed
];



module.exports = {
    data : moreQuestions
}