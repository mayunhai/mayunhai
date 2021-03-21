<template>
  <div>
    <table v-if="type == 1">
      <tr>
        <th style="width: 30px">id</th>
        <th style="width: 30px">title</th>
        <th>content</th>
      </tr>
      <tr>
        <td>1</td>
        <td>xxx</td>
        <td>xxx汽车xxx</td>
      </tr>
      <tr>
        <td>2</td>
        <td>xxx</td>
        <td>xxx娱乐xxx</td>
      </tr>
      <tr>
        <td>3</td>
        <td>xxx</td>
        <td>xxx旅游xxx</td>
      </tr>
      <tr>
        <td>4</td>
        <td>xxx</td>
        <td>xxx娱乐xxx</td>
      </tr>
      <tr>
        <td>5</td>
        <td>xxx</td>
        <td>xxx旅游xxx</td>
      </tr>
      <tr>
        <td>6</td>
        <td>xxx</td>
        <td>xxx汽车xxx</td>
      </tr>
      <tr>
        <td>7</td>
        <td>xxx</td>
        <td>xxx娱乐xxx</td>
      </tr>
      <tr>
        <td>8</td>
        <td>xxx</td>
        <td>xxx旅游xxx</td>
      </tr>
      <tr>
        <td>9</td>
        <td>xxx</td>
        <td>xxx娱乐xxx</td>
      </tr>
      <tr>
        <td>10</td>
        <td>xxx</td>
        <td>xxx旅游xxx</td>
      </tr>
    </table>

    <table v-if="type == 2">
      <tr>
        <th>mysql</th>
        <th>elasticsearch</th>
      </tr>
      <tr>
        <td>
          <table>
            <tr>
              <th style="width: 30px">key</th>
              <th>value</th>
            </tr>
            <tr>
              <td>1</td>
              <td>xxx汽车xxx</td>
            </tr>
            <tr>
              <td>2</td>
              <td>xxx娱乐xxx</td>
            </tr>
            <tr>
              <td>3</td>
              <td>xxx旅游xxx</td>
            </tr>
            <tr>
              <td>4</td>
              <td>xxx娱乐xxx</td>
            </tr>
            <tr>
              <td>5</td>
              <td>xxx旅游xxx</td>
            </tr>
            <tr>
              <td>6</td>
              <td>xxx汽车xxx</td>
            </tr>
            <tr>
              <td>7</td>
              <td>xxx娱乐xxx</td>
            </tr>
            <tr>
              <td>8</td>
              <td>xxx旅游xxx</td>
            </tr>
            <tr>
              <td>9</td>
              <td>xxx娱乐xxx</td>
            </tr>
            <tr>
              <td>10</td>
              <td>xxx旅游xxx</td>
            </tr>
          </table>
        </td>
        <td>
          <table>
            <tr>
              <th style="width: 30px">key</th>
              <th>value</th>
            </tr>
            <tr>
              <td>汽车</td>
              <td>[1, 6]</td>
            </tr>
            <tr>
              <td>娱乐</td>
              <td>[2, 4, 7, 9]</td>
            </tr>
            <tr>
              <td>旅游</td>
              <td>[3, 5, 8, 10]</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ESTable',
  props: {
    type: {
      type: Number,
      default: 1
    }
  }
}
</script>
