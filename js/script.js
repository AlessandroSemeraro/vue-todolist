const { createApp } = Vue;

createApp({
    data() {
        return {
            
            userNewToDo:'',

            toDoList: [

            teamMeeting = {
            text: 'Set a team meeting on Friday at 2PM.' ,
            done: true,
            },
            
            scheduleInterview = {
            text:' Schedule an interview with Ms Parker.',
            done: false,
            },

            informTeacher = {
                text:' Instruct Mr Gino to arrange training material for the newly students.',
                done: true,
            },

            orientationProgram = {
                text:' Discuss the orientation program with HR',
                done: false,
            },

            meetingStatusUpdate = {
                text:' Meet with Mrs Wellington for a status update on the sponsorship proposal',
                done: true,
            },
            ]
            }
        },
    methods: {
        alreadyDone(elementDone){
            elementDone.done = false
        },

        removeElement(index){
            this.toDoList.splice(index,1)
        },

        addElement(){
            this.userNewToDo='';
            this.toDoList.push({text: userNewToDo, done:false});
        }
        }
        }

    
    
   ).mount('#app');

