A few years ago, when I first started my studies to become a... to be confirmed developer. I still don't know exactly what my major title is going to be; it is complicated. 

Regardless of it, I came across to what, at the time, looked to me like the greatest masterpiece ever created by mankind: GitHub. The pretty cat logo tricked me into thinking the journey was going to be as cozy as a Christmas Market. Little did I know the workflow can easily transform into a windy autumn day in the coasts of Ireland. 

The way I was taught GitHub was rather... unique. It wasn't shown as the version control tool it is supposed to be, it was more directed as a way of publishing our first local html-based little corny website. Nothing else. 

When I started my Internship a couple of months ago, my *mentor* introduced me to what GitHub **actually** does. And once again, my eyes sparked with the dopamine of feeling that life had given me the answer to all my problems. That was until I was transferred with my second *mentor* to the **continuos release team** of our org. *Great Mother* of Pandora...

The thing is, the more you work with GitHub, the more things you discover it can do. I went from commiting every time I removed or edit a line of code to encounter with merge conflicts and `rebase` situations. Yet, no imminent panic. But then it came... the **workflows...**

My first task in the **continuos release team** was to add a **GitHub Action** on every repo of our org. My job consisted on adding a third party **GH Action** that would allow us to track broken links on our documentation by scanning every `.md` file on each repo. My own *mentor* had already tested it a couple of times and it seemed to be working just fine. So we went ahead, drew a plan, created an *Epic*; the works.

Our org has 18 repos: 1 had already been done, 3 of them did not need it, so we came down to 14. I decided to start with the 2 ones I was more familiar with (the ones I started my Internship with), since I would understand the context of the docs. 

The workflow I drew for myself was to, in my fork, create the `config.json` file located at top level of the repo (for custumisation of the action), and then include 2 `YAML` files, 1 for a weekly full repo check and 1 for checking modified `.md` files on a *Pull Request*. After that, I would merge that to my fork's main branch. Then, I would create a random `.md` file with a link and send a pull request to my fork to test the workflow. Finally, I would run the full repo check and correct any broken links. Once that done, I would create a pull request to upstream.

Lads... the weekly `YAML` was like 10 lines long... I don't understand how did we get to this... Well, I do, actually. Let's do the tally of the damage.

1. We discovered (after 2 days of investigation) that the `config.json` file has a different structure depending to if you use it as a local tool or as a GH action. 2 DAYS. Basically, the tool has a `"skip": "this.link.com"` condition. I tested included a `localhost` skip, one that I knew for a fact should be skipped, including it as a string. BIG MISTAKE. The check was failing... succesfully? The logs simply showed as not scanning ANY links at all. After much reading, my mentor trying multiple combinations, and multiple conversations sitting down on the floor at the office, we discovered that the value needed to be declared as an **ARRAY**, not as a string, even if there was just one thing to skipped. So basically: Local tool? String. GH Action? Array. Lovely.

2. Once I (finally) sent my PR to upstream we found some corrections to add. One being a way to notify maintainers about the check fail. We were suggested to add a **"Create Issue"** job, or another workflow to create an issue. The third party action includes a staticstics summary showing how many links were scanned, how many passed, broken, skipped, and which ones failed and where. My idea was to, inside the workflow file, to add another job that would take this summary, and create an issue with it, or edit it if it was already existing. Since we were so burnt out from the array situation, we decided to ask the mighthy gods: AI. Partnered with Claude we found a way to do it, but since it was taking code from another workflow someone else had designed, it suggested to create a temporarly `JSON` file to store this. It seemed a bit overkill for a **Broken Link Checker**, so we decided to go with a simple `create issue` job saying: "This is failing bro, check it please".

3. I was a bit stubburn on it, so I spent maybe half a day trying different prompts and reading a lot of GH Actions related docs to find a way to create a more useful issue, but still not making it a pain on the weekly workflow file. I finally found a way to print a one liner of the stats, include a link to the failed workflow. I got approved, tested it, and it worked! 

4. Maintainers also wanted a way to skip the PR check if the `config.json` file itself was modified but to still check if it was doing what is was supposed to. So we included a condition on the weekly check to run istead if that was the case. However, it would also create an issue, which was not ideal. My **mentor** took the executive decision to not do that, and I hid behind him and let him handle it. I am just an intern guys...

5. Actions were down a couple of times during my testing. So much I went for movies one night and came back at 1 am to run the checks again bacause it was finally up after GitHub reported an outage.

6. The weekly workflow file is now 82 lines long!

I finally got those PR merged, which means... I still have another 14 ones to go... And as I am writing this, I have just noticed that now I probably also have to edit to one that was already done before... 

**GitHub Actions** have worn me down significantly. They are useful, that is true. Mostly when working with huge amounts of people, collaborating spaces, and basically making sure internal policies are enforced. However, I have lost count of how many times I have used our orgs workflows tokens by now. This whole developement has taken 3 weeks and it is still going. Everytime we solve something, another issue arose. I guess that is how the tech world works? 

Definetly a very good exercise as an intern I might add. As a conclusion, do not work with **GitHub Actions**. Just kidding. As I said, they are important. However, I do wish there was an easier way to develop and work with them. I have more questions than answers at this point. Do you develop your own or use a third party? Do you have indiviual repo actions or org level ones? (Hopefully I would write about that one day in the close future) How do you make sure people know what to look for in the logs?

Anywho, have a beautiful and spooky Halloween! I hope your night is at least as scary as my dreams about our **Broken Link Check GitHub Action.**

Severely demoralised,
Pascacio
