# What's Checked Out?

The public web interface for Biblionix is, frankly, trash. And it's even worse when you have multiple accounts.  Checking what we have checked out with a family of five is a chore.

Luckily, it operates over a loosely secured API, so we can automate it!

That's what "What's Checked Out?" does.  It takes a Biblionix account, password and subdomain, logs in, gets the list of checked out items, and repeats for every linked account as well.

At the end you get a summary of everything that is currently out.

![Screenshot of What's Checked Out? in action](https://whats-checked-out.hobbs.workers.dev/screenshot.png)

[Try it out here!](https://whats-checked-out.hobbs.workers.dev)

## Troubleshooting

This tool is designed based on the Blair Public Library's Biblionix setup, and may not work with all libraries using Biblionix.  Please file an issue if you run into problems!

### My linked accounts are not working.

Currently, fetching linked cards only works if the login "username" for each account is the card number, and the password is the same for all accounts.

### I'm not comfortable putting my library password into this.

I totally understand, I don't blame you.  This project is a web version of this [CLI tool](https://github.com/jmhobbs/whats-checked-out) that you can run locally on your own machine.

If you want something you can audit and control, that's the ticket.  I will try to keep them both up to date.
