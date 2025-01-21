```javascript
// Solution using the !important flag (not recommended in most cases)
<div class="bg-gray-100 p-4">
  <div class="bg-gray-200 p-2">
    <p class="text-gray-500 !important">This text should be gray-500</p>
  </div>
</div>

// Better solution using more specific class names or class order
<div class="bg-gray-100 p-4">
  <div class="bg-gray-200 p-2">
    <p class="text-gray-500">This text should be gray-500</p>
  </div>
</div>
```