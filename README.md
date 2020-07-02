# LeanKit Actions
## Get Random Number
### Inputs
#### "min-value"
* _Required_ Minium value for random number. Default 0.
#### "max-value"
* _Required_ Maximum value for random number. Default 100.
### Outputs
#### "random"
The random number you requested.
### Example Usage
```
uses: johndmathis/workflow-tests/randomNumber@v1
with:
  min-value: 10
  max-value: 20
```