const mapUserToModel = (user) => ({
    first: user.name.first,
    middle: user.name.middle,
    last: user.name.last,
    phone: user.phone,
    state: user.address.state,
    country: user.address.country,
    city: user.address.city,
    street: user.address.street,
    zip: user.address.zip,
    houseNumber: user.address.houseNumber,
    url: user.image.url,
    alt: user.image.alt,
});

export default mapUserToModel;