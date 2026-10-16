import test from 'node:test';
import assert from 'node:assert/strict';
import {
  isValidEmail,
  isValidPhone,
  validateConsultationForm,
  validateSourcingQuoteForm,
} from './validation.ts';

test('email validator verifies proper format', () => {
  assert.equal(isValidEmail('seller@fortunemakers.com'), true);
  assert.equal(isValidEmail('growth.team+marketplace@company.co'), true);
  assert.equal(isValidEmail('invalid-email'), false);
  assert.equal(isValidEmail('user@domain'), false);
  assert.equal(isValidEmail(''), false);
});

test('phone validator verifies phone string with various formatting', () => {
  assert.equal(isValidPhone('+91 98765 43210'), true);
  assert.equal(isValidPhone('(555) 234-5678'), true);
  assert.equal(isValidPhone('9876543210'), true);
  assert.equal(isValidPhone('123'), false);
  assert.equal(isValidPhone('abcde12345'), false);
});

test('validateConsultationForm catches missing required fields', () => {
  const result = validateConsultationForm({
    fullName: '',
    email: 'bad-email',
    phone: '',
    marketplace: '',
    currentStage: '',
  });

  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.email);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.marketplace);
  assert.ok(result.errors.currentStage);
});

test('validateConsultationForm passes with complete valid input', () => {
  const result = validateConsultationForm({
    fullName: 'Arun Kumar',
    email: 'arun@ecombrand.in',
    phone: '+91 98200 12345',
    marketplace: 'Amazon India',
    currentStage: 'Scaling existing catalog',
    primaryGoal: 'ACOS Optimization & BuyBox retention',
  });

  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('validateSourcingQuoteForm requires consent and valid quantity', () => {
  const unconsented = validateSourcingQuoteForm({
    fullName: 'Sarah Chen',
    businessName: 'Chen Living Goods',
    email: 'sarah@chenliving.com',
    phone: '+1 415 555 2671',
    category: 'Home & Kitchen',
    orderQuantity: '500 - 1000 units',
    consent: false,
  });

  assert.equal(unconsented.isValid, false);
  assert.ok(unconsented.errors.consent);

  const valid = validateSourcingQuoteForm({
    fullName: 'Sarah Chen',
    businessName: 'Chen Living Goods',
    email: 'sarah@chenliving.com',
    phone: '+1 415 555 2671',
    category: 'Home & Kitchen',
    orderQuantity: '500 - 1000 units',
    consent: true,
  });

  assert.equal(valid.isValid, true);
});
