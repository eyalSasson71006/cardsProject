const normalizeUserToEdit = (user) => ({
    name: {
        first: user.first,
        middle: user.middle,
        last: user.last,
    },
    phone: user.phone,
    address: {
        state: user.state,
        country: user.country,
        city: user.city,
        street: user.street,
        zip: user.zip,
        houseNumber: user.houseNumber,
    },
    image: {
        url: user.url,
        alt: user.alt,
    },
});

export default normalizeUserToEdit;