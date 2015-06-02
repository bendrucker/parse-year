'use strict'

var test = require('tape')
var parseYear = require('./')

test(function (t) {
  t.equal(parseYear('12'), 12)
  t.equal(parseYear(12), 12)
  t.equal(parseYear('08'), 8)
  t.equal(parseYear(0), 0)

  t.equal(parseYear(0, true), 2000)
  t.equal(parseYear(12, true), 2012)
  t.equal(parseYear('12', true), 2012)
  t.equal(parseYear(5, true), 2005)
  t.equal(parseYear('5', true), 2005)
  t.equal(parseYear(10, true), 2010)

  t.equal(parseYear(0, true, new Date('1999-06-01')), 1900)

  t.notOk(parseYear('foo'))
  t.notOk(parseYear('2.1'))
  t.notOk(parseYear('2a'))

  t.end()
})
