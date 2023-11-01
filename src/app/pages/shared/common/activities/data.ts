const Activities = [
    {
      statusCode: 200,
      message: "Activity list",
      data: [
        {
          activityId: 12912,
          subject:"Call to john",
          taskowner:"Mariana John",
          duedate: "24 Sep 2023",          
          status: "New",
          priority: "High",
         
          
        },
        {
           activityId: 12913,
           subject:"Call to john",
           taskowner:"Mariana John",
           duedate: "24 Sep 2023",            
           status: "New1",
           priority: "High",           
             
        },
        
      ],
    },
  ];
  const Appointment = [
    {
      statusCode: 200,
      message: "Leads detail list",
      data: [
        {
            appointmentId: 12912,
            title:"Appointment with Mr. Muhammed Al Jasser",
            from: "18/10/2023 11:00 AM",          
            to: "18/10/2023 12:00 PM",
            host:"Mariana John",
            priority: "High",
           
            
          },
          {
            appointmentId: 12913,
            title:"Appointment with Mr. Muhammed Al Jasser",
            from: "18/10/2023 11:00 AM",          
            to: "18/10/2023 12:00 PM",
            host:"Mariana John",
            priority: "High",
           
            
          },
        
      ],
    },
  ];
  export { Activities,Appointment };