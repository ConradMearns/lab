# Version 1 Notes
The idea was to create a fish tank like simulation. Nothing of purpose, rather something cool to play with and look at. Each Boid is a creature that moves in mostly straight lines (random forces work to make things less pattern like). These Boids slowly start dying, and seek plants to eat, and to live. The fundamental problem I've encountered is that this is not at all exciting to look at. It can be fun to observe the Boid's slowly increase in population, but it is a slow and painful process.

# Version 2 Concept
The environment must be changed, as if the Boid's fight to move through a dense liquid. This change will make sense of a Boid's constant energy decrease. Instead of Boid's turning into plants on death, they will remain dormant. This creates a few new needs for Boids.
- A way to gather energy to move
- Method of re-activating dead Boids
- A more intuitive way of creating more Boids

To gather energy, Boid's will 'photosynthesize' themselves with the help of a Module. Photo-Modules will be smaller green circles that become absorbed by a Boid. Specific update code will be contained in the Module, such as increasing the Boid's energy while standing still. Modules then have a success condition. Once the condition is met, enough energy collected in this case, the module and Boid spend energy to eject away from each other.

Condenser Modules will slowly spend energy to create chunks of materials. The success condition is met when energy becomes too low.

Assembly Modules will wander and store materials, once enough is gathered the success condition is met, and a new Boid is spawned in the process.

Community Modules will turn a Boid into a central hub for other Boids, physically tethering them together.
