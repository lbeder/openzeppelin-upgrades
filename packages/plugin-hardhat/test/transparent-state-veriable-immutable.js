const test = require('ava');

const { ethers, upgrades } = require('hardhat');

test.before(async t => {
  t.context.ImmutableStateVariable = await ethers.getContractFactory('ImmutableStateVariable');
});

test('initialize immutable state variables', async t => {
  const { ImmutableStateVariable } = t.context;
  const instance = await upgrades.deployProxy(ImmutableStateVariable, [], {
    kind: 'transparent',
    ctorArgs: [42],
    unsafeAllow: ['constructor', 'state-variable-immutable'],
  });
  t.is((await instance.x()).toString(), '42');

  const instance2 = await upgrades.deployProxy(ImmutableStateVariable, [], {
    kind: 'transparent',
    ctorArgs: [100],
    unsafeAllow: ['constructor', 'state-variable-immutable'],
  });
  t.is((await instance2.x()).toString(), '100');
});
