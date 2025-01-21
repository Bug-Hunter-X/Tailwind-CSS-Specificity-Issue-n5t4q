```javascript
// Example showing the use of Tailwind classes that result in unexpected behavior due to specificity.
<div class="bg-gray-100 p-4">
  <div class="bg-gray-200 p-2">
    <p class="text-gray-500">This text should be gray-500</p>
  </div>
</div>
```