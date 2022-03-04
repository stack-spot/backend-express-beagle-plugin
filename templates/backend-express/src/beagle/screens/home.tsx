import { BeagleJSX } from '@zup-it/beagle-backend-core'
import { Button, If, Text, Then } from '@zup-it/beagle-backend-components'
import { Screen } from '@zup-it/beagle-backend-express'
import { globalContext } from '../global-context'
import { gte, length } from '@zup-it/beagle-backend-core/operations'

const style = { marginTop: 40 }

export const Home: Screen = ({ navigator }) => (
  <>
    <Text>Hello!</Text>
    <Text style={style}>This is the Home Page!</Text>
    <If condition={gte(length(globalContext.get('message') ?? ''), 0)}>
      <Then>
        <Text style={style}>Global context: {globalContext.get('message')}</Text>
      </Then>
    </If>    
    <Button style={style} onPress={navigator.popView()}>Go back</Button>
  </>
)
