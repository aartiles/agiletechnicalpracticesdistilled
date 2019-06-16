export default class NotYourTurnError extends Error {
  constructor() {
    super('NotYourTurnError');
  }
}