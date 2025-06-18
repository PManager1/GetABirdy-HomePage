// src/routes/verify-otp/+page.js
export function load({ url }) {
  const phone = url.searchParams.get('phone');
  console.log('4-- phone from load():', phone);
  return {
    phone
  };
}

