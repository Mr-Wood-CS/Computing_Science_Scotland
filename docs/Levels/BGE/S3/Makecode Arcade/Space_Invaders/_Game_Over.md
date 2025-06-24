🛑 Lesson 5: Game Over Conditions

🎯 Goal

End the game if an enemy reaches the bottom.

✅ Steps

In ||sprites:Sprites||, use on enemy of kind Enemy overlaps player.

Inside it:

Use info.changeLifeBy(-1).

If life reaches 0, the game ends automatically.

Alternatively, check if enemy Y > 110 and destroy the enemy + lose life.

🧪 Checkpoint

Game ends if enemy reaches the player or bottom.

🎨 Lesson 6: Polish and UI

🎯 Goal

Improve the look and feel of the game.

✅ Steps

Use info.setScore(0) and info.setLife(3) at start.

Add sounds using ||music:Music|| (e.g., on laser or enemy hit).

Use game.splash("Space Invaders") to show a title screen.

Optional: Add background image using ||scene:Scene||.

🧪 Checkpoint

Game has score, lives, sound, and a title screen.

🧠 Extension Tasks (Hopper Pathway)

Add multiple enemy types with different images.

Create enemy bullets and add dodge mechanics.

Add levels or increase difficulty over time.

Introduce a boss with more health.

