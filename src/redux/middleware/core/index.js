import debounceMiddleware from './debounce.middleware'
import throttleMiddleware from './throttle.middleware'
import measureMiddleware from './measure.middleware'

export default [
    throttleMiddleware,
    debounceMiddleware,
    measureMiddleware,
]