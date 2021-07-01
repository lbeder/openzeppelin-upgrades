pragma solidity ^0.6.0;

contract ImmutableStateVariable {
  uint public immutable x;

  constructor(uint _x) public {
    x = _x;
  }
}
