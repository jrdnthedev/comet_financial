export default function generateAccountNumber() {
    return Math.floor(100000000 + Math.random() * 900000000);
}