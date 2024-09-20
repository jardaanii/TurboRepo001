import { Card } from '@repo/ui/card'
import { Admin } from '@repo/ui/admin'
import { InputBox } from '@repo/ui/input-box'

export default function signup() {
  return (<div>
    <Card href="www.youtube.com" title='This is Signup ' className='signupCard'  >
      Hello from the sign up
    </Card>

    <Admin h1Heading="This is  Admin Heading">
      Hello from Admin
    </Admin>

    <InputBox />
  </div>)
}


