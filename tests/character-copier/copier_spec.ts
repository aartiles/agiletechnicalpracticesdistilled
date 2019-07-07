import should from 'should';
import sinon from 'sinon';
import Copier from '../../src/character-copier/Copier';
import Source from '../../src/character-copier/Source';
import Destination from '../../src/character-copier/Destination';

class SourceTest implements Source {
  getChar(): string  {
    return '';
  }
}

class DestinationTest implements Destination {
  setChar(char: string): void  {
  }
}

describe('Character Copier', () => {
  it('copies a character', () => {
    const source = new SourceTest();
    const getCharStub = sinon.stub(source, 'getChar');
    getCharStub.onCall(0).returns('a');
    getCharStub.onCall(1).returns('b');
    getCharStub.onCall(2).returns('\n');

    const destination = new DestinationTest();
    const setCharSpy = sinon.stub(destination, 'setChar');

    const copier = new Copier(source, destination);
    copier.copy();

    should(setCharSpy.calledTwice).be.ok();
    should(setCharSpy.getCall(0).args[0]).be.eql('a');
    should(setCharSpy.getCall(1).args[0]).be.eql('b');    
  });

});

