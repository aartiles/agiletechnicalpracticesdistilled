export default class PositionAlreadyPlayedError extends Error {
  constructor() {
    super('PositionAlreadyPlayedError');
  }
}