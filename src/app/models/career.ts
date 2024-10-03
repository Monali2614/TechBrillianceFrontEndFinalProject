export class Career {


        name: string = '';
        email: string = '';
        contactNumber: string = '';
        workExperience: string = '';
        desiredDomain: string = '';
        resume: any; // This can be used to handle the resume file (byte array)
      
        constructor(init?: Partial<Career>) {
          Object.assign(this, init);
        }
}
      
