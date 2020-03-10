import * as uuid from 'uuid';
export class LoginResult {

    public constructor(public subjectId: number,
        public token=uuid.v4,
        public accessLevel: number) { }
}
