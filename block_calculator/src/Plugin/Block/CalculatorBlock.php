<?php
namespace Drupal\block_calculator\Plugin\Block;
use Drupal\Core\Block\BlockBase;
/**
 * Block Calculator.
 *
 * @Block(
 *   id = "block_calculator",
 *   admin_label = @Translation("Block Calculator"),
 * )
 */
class CalculatorBlock extends BlockBase {
  /**
   * {@inheritdoc}
   */
  public function build() {
    return [
      '#markup' => '<div id="block">CALCULATOR!</div>',
      '#attached' => [
        'library' => [
          'block_calculator/block_calculator',
        ],
      ],
    ];
  }
}