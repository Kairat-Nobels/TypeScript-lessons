// enum (перечисление) в TypeScript - это специальная конструкция, которая позволяет создавать именованные наборы значений для улучшения читаемости кода и облегчения работы с константами.
enum Membership {
    Simple,
    Standard,
    Premium
}

const membership = Membership.Standard
const membershipReverse = Membership[2]
console.log(membership);
console.log(membershipReverse);

enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM
console.log(social);
