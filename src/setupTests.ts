import * as Enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

class LocalStorageMock {
  store: any

  constructor () {
    this.store = {}
  }

  clear () {
    this.store = {}
  }

  getItem (key: string) {
    return this.store[key] || null
  }

  setItem (key: string, value: string) {
    this.store[key] = value.toString()
  }

  removeItem (key: string) {
    delete this.store[key]
  }
}

global['localStorage'] = new LocalStorageMock()

Enzyme.configure({ adapter: new Adapter() })
