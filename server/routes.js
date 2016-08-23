import mainController from './mainController'

export default function(router) {
  router.get('/api/masterMLB', mainController.mainGet) 
}