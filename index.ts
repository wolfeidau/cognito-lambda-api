
export function handler(event: any , context: any, callback: (...args: any[]) => void) {

    // just to get started you can log the event, this will cause issues
    // if you start using API gateway with binary content.
    console.log({ event });

    const responseBody = {
        message: "test",
    };

    const response = {
        statusCode: 200,
        headers: {
            "x-custom-header" : "my custom header value",
        },
        body: JSON.stringify(responseBody),
    };

    callback(null, response);
}
