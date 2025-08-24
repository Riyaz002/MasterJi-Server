export default class UserSubscriber {
  constructor(eventEmitter) {
    this.eventEmitter = eventEmitter;
    console.log('UserSubscriber initialized');
  }
} 