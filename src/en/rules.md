# Rules

Syrac is designed to have a few simple rules, which are described here.
If you think some of these rules are not fair or could be improved, feel free to [suggest a change][1].

## Tasks

### Creating tasks

Everyone can create tasks using either built-in XCTrack features or third-party tools. There are some restrictions regarding the tasks that can be submitted:

- tasks should be submitted in [XCTrack format][2]
- tasks should be of type `ELAPSED-TIME`
- tasks must have a Start of Speed Section (SSS) and an End of Speed Section (ESS)
- tasks must have between 0 and 20 turnpoints, including SSS and ESS
- turnpoint radius must be between 100m and 100km
- optimized task distance between SSS and ESS must be between 5km and 500km

In order to prevent spam, free users can create a maximum of 10 tasks per 24-hour window.

### Deleting tasks

You can only delete the tasks you created, and which have not been completed yet.
As soon as someone (including you) completes a given task, it becomes part Syrac's permanent task pool.

If you were the first one to complete a task which was deleted, feel free to re-create the task yourself and submit your track.

If you wish to request the deletion of a completed task, or the update of task metadata, please [request a manual change][3].
Make sure to include a link to the task as well as a clear explanation of the requested changes.

## Flights

Everyone can submit attempts for all tasks, without limits.
Only submit your own tracks, they are tied to your user account.
You can submit multiple attempts to the same task (or different ones) during the same day.
Tracks should be submitted as IGC files with a valid signature.

## Cheating

The following actions are considered cheating.
Cheating users will first receive a warning, and then be permanently banned from the platform should they attempt to cheat again.

* submitting a flight track which is not yours
* submitting a forged IGC file

[1]: https://github.com/orgs/syrac-org/discussions/new?category=ideas
[2]: https://xctrack.org/Competition_Interfaces.html
[3]: https://github.com/orgs/syrac-org/discussions/new?category=change-requests
