//DESCRIBE QUE (A QUIEN) VOY A TESTEAR
describe('cipher', () => {
//EL IT ES QUE VOY A TESTEAR/ LO QUE ME VA A RESPONDER
  it('debería ser un objeto', () => {
//ASSER ES LO QUE YO QUIERO COMPARAR
    assert.equal(typeof cipher, 'object');
  });

  describe('window.cipher.encode', () => {
    it('debería ser una función', () => {
      assert.equal(typeof window.cipher.encode, 'function');
    });
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(window.cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 33),"HIJKLMNOPQRSTUVWXYZABCDEFG")
    });
    it('debería retornar mismo caracter si es diferente a las mayusculas', () => {
      assert.equal(window.cipher.encode("123", 15), "123")
  });
  describe('window.cipher.decode', () => {
    it('debería ser una función', () => {
      assert.equal(typeof window.cipher.decode, 'function');
    });
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(window.cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG", 33), "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    });
    it('debería retornar mismo caracter si es diferente a las mayusculas', () => {
      assert.equal(window.cipher.decode("123", 15), "123")
  });
});
});
})
